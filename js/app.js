window.addEventListener('beforeunload', function (e) {
  // Abbrechen des Ereignisses und Anzeigen des Dialogfensters
  e.preventDefault();
  e.returnValue = 'Wenn der Tab geschlossen wird, gehen alle Eingaben verloren!';
});
