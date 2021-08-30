class PerformanceMonitor {
  static markStart (metricName: string): void {
    performance.mark(`${metricName}:start`)
  }

  static markEnd (metricName): PerformanceEntry {
    performance.mark(`${metricName}:end`)
    performance.measure(`${metricName}:measure`, `${metricName}:start`, `${metricName}:end`)
    let result = performance.getEntriesByName(`${metricName}:measure`)
    performance.clearMeasures(`${metricName}:measure`)
    performance.clearMarks(`${metricName}:start`)
    performance.clearMarks(`${metricName}:end`)
    if (result.length > 0) return result[0]
    return undefined
  }
}

export { PerformanceMonitor }
