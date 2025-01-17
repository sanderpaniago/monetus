import { Box, Text } from '@chakra-ui/react'
import { ChartStockQuery } from '@generated/graphql'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'
import { useChartStock } from '../../hooks/useChartStock'
import { useStockBySymbol } from '../../hooks/useStockBySymbol'
import { formatterPrice } from '../../utils/formatter'
import { ButtonWishList } from '../ButtonWishList'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
  loading: () => (
    <Skeleton
      height={300}
      width="100%"
      baseColor="#FFF"
      borderRadius="8px"
      style={{ marginBottom: '20px' }}
    />
  )
})

type Props = {
  stock: string
  initialData: ChartStockQuery['chartStock']
}

export default function Graphic({ stock, initialData }: Props) {
  const { data, isLoading } = useChartStock(stock, initialData)
  const { data: dataStock, isLoading: stockLoading } = useStockBySymbol(stock)
  const categories = data?.map(item => item.label)
  const series = data?.map(item => item.close)

  if (isLoading) {
    return (
      <Skeleton
        height={400}
        width="100%"
        baseColor="#FFF"
        borderRadius="8px"
        style={{ marginTop: '36px' }}
      />
    )
  }

  return (
    <Box
      px={6}
      py={7}
      pb={0}
      background="white"
      borderRadius="md"
      mt={8}
      boxShadow="custom"
    >
      <Box d="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Box d="flex" alignItems="center">
          {!!dataStock?.symbol && <ButtonWishList stock={dataStock} />}
          <Box ml="3">
            {stockLoading ? (
              <Skeleton width={170} height={20} baseColor="#FFF" count={2} />
            ) : (
              <>
                <Text fontWeight={500}>{dataStock?.symbol}</Text>
                <Text color="gray.600" lineHeight={1}>
                  {dataStock?.companyName}
                </Text>
              </>
            )}
          </Box>
        </Box>
        <Box>
          {dataStock && (
            <>
              <Text fontWeight={600} textAlign="right">
                <Image
                  src={
                    dataStock?.changePercent > 0
                      ? '/icons/graph-up.svg'
                      : '/icons/graph-down.svg'
                  }
                  alt="stock down graph"
                  height={16}
                  width={16}
                />{' '}
                {formatterPrice(dataStock?.latestPrice ?? 0)}
              </Text>
              <Text
                color={dataStock.changePercent > 0 ? 'green.500' : 'red.500'}
                fontWeight={600}
                fontSize="sm"
                textAlign="right"
              >
                {formatterPrice(dataStock.change ?? 0)} (
                {dataStock.changePercent > 0
                  ? `+${dataStock.changePercent.toFixed(3)}`
                  : dataStock.changePercent.toFixed(3)}
                %)
              </Text>
            </>
          )}
        </Box>
      </Box>

      <Chart
        id="area-datetime"
        type="area"
        height={300}
        options={{
          chart: {
            animations: {
              enabled: false
            },
            toolbar: {
              show: false
            },
            zoom: {
              enabled: false
            },
            foreColor: '#657786'
          },
          grid: {
            show: true
          },
          dataLabels: {
            enabled: false
          },
          markers: {
            size: 4,
            colors: '#0047BB',
            strokeColors: '#0047BB',
            strokeWidth: 0,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            shape: 'circle',
            hover: {
              size: undefined,
              sizeOffset: 3
            }
          },
          tooltip: {
            theme: 'dark',
            marker: {
              show: false
            },
            x: {
              show: false
            },
            y: {
              title: {
                formatter: () => ''
              }
            }
          },

          fill: {
            opacity: 0.3,
            type: 'gradient',
            gradient: {
              shade: 'dark',
              opacityFrom: 0.7,
              opacityTo: 0.2
            },
            pattern: {
              style: 'verticalLines',
              width: 6,
              height: 6,
              strokeWidth: 2
            }
          },
          yaxis: {
            labels: {
              formatter: value => formatterPrice(value)
            }
          },
          xaxis: {
            axisBorder: {
              color: '#0047BB'
            },
            axisTicks: {
              color: '#0047BB'
            },
            categories
          }
        }}
        series={[
          {
            name: 'Preço',
            data: series ?? []
          }
        ]}
      />
    </Box>
  )
}
