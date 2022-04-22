import { Box, Text } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { ButtonWishList } from '../BUttonWishList'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

export default function Graphic() {
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
          <ButtonWishList />
          <Box ml="3">
            <Text fontWeight={500}>MSFT</Text>
            <Text color="gray.600" lineHeight={1}>
              Microsoft
            </Text>
          </Box>
        </Box>
        <Box>
          <Text fontWeight={600} textAlign="right">
            <Image
              src="/icons/graph-down.svg"
              alt="stock down graph"
              height={16}
              width={16}
            />{' '}
            $265,42
          </Text>
          <Text
            color="red.500"
            fontWeight={600}
            fontSize="sm"
            textAlign="right"
          >
            $-0.09 (-0.03%)
          </Text>
        </Box>
      </Box>

      <Chart
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
          tooltip: {
            theme: 'dark'
          },

          fill: {
            opacity: 0.3,
            type: 'gradient',
            gradient: {
              shade: 'dark',
              opacityFrom: 0.7,
              opacityTo: 0.3
            }
          },
          xaxis: {
            axisBorder: {
              color: '#0047BB'
            },
            axisTicks: {
              color: '#0047BB'
            },
            categories: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00']
          }
        }}
        series={[
          {
            name: 'Transações',
            data: [40, 70, 60, 50, 40, 70]
          }
        ]}
      />
    </Box>
  )
}
