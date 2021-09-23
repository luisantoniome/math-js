const calcWeightedMean = notes => {
  const notesWithCredit = notes.map(note => note.note * note.credit)

  const sumOfNotesWithCredit = notesWithCredit.reduce((sum = 0, val) => sum + val)

  const credits = notes.map(note => note.credit)

  const sumOfCredits = credits.reduce((sum = 0, val) => sum + val)

  const weightedMean = sumOfNotesWithCredit / sumOfCredits

  return weightedMean
}

console.log(
  calcWeightedMean([
    {
      course: 'Coding',
      note: 10,
      credit: 2
    },
    {
      course: 'Money',
      note: 8,
      credit: 5
    },
    {
      course: 'Diet',
      note: 7,
      credit: 5
    }
  ])
)