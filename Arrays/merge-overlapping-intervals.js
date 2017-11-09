// Given an array (list) of intervals as input where each
// interval has a start and end timestamps. Input array is
// sorted by starting timestamps. You are required to merge
// overlapping intervals and return output array (list).


const mergeOverlappingIntervals = intervals => {
  if (intervals.length < 2) {
    return intervals
  }

  let results = [{ start: intervals[0].start, end: intervals[0].end }]

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start > results[results.length -1].end) {
      results.push({ start: intervals[i].start, end: intervals[i].end})
    }
    if (intervals[i].end > results[results.length -1].end) {
      results[results.length -1].end = intervals[i].end
    }
  }

  return results
}
