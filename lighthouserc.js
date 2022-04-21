module.exports = {
  ci: {
    collect: {
      url: ['/'],
      startServerCommand: 'yarn serve'
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.95 }],
        'categories:accessibility': ['error', { minScore: 0.95 }]
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
}
