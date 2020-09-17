export const addToLocalStorage = clue => {
  const existingClues = JSON.parse(localStorage.getItem('discoveredClues')) || [];
  let alreadyExisting = existingClues.filter(c => c.person === clue.person).length;
  if (!alreadyExisting) {
    existingClues.unshift(clue)
  }
  localStorage.setItem('discoveredClues', JSON.stringify(existingClues));

  let existingNotes = JSON.parse(localStorage.getItem('existingNotes')) || [];
  alreadyExisting = existingNotes.filter(note => note === clue.person).length;
  existingNotes = existingNotes.concat([clue.person, clue.weapon, clue.place]);
  localStorage.setItem('existingNotes', JSON.stringify(existingNotes));
};