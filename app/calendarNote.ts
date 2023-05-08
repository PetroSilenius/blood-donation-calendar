const getOptimalVisitDate = () => {
  const visitTime = new Date();
  visitTime.setMonth(visitTime.getMonth() + 2);
  visitTime.setDate(visitTime.getDate() + ((1 + 7 - visitTime.getDay()) % 7));

  return visitTime;
};

const dateToRFC5545 = (date: Date) => {
  return date
    .toISOString()
    .replace(/[:-]/g, "")
    .replace(/\.\d{3}Z$/, "Z");
};

export const getVisitCalendarNoteLink = () => {
  const startTime = getOptimalVisitDate();
  startTime.setHours(startTime.getHours() - 1);
  startTime.setMinutes(0);

  const endOfMeeting = new Date(startTime.getTime() + 30 * 60 * 1000);

  const visitDate =
  dateToRFC5545(startTime) + "/" + dateToRFC5545(endOfMeeting);

  return `https://calendar.google.com/calendar/u/0/r/eventedit?text=Verenluovutus&dates=${visitDate}&location=Veripalvelu%20Turku`;
};

export const getBookCalendarNoteLink = () => {
  const startTime = getOptimalVisitDate();
  startTime.setDate(startTime.getDate() - 1);
  startTime.setHours(18);
  startTime.setMinutes(0);

  const endTime = new Date(startTime.getTime() + 30 * 60 * 1000);

  const bookDate = dateToRFC5545(startTime) + "/" + dateToRFC5545(endTime);

  const noteDescription = `<div><h2>Varaa aika</h2><a href="https://ajanvaraus.veripalvelu.fi/VP/location/Turku">https://ajanvaraus.veripalvelu.fi/VP/location/Turku</a><h2>Terveyskysely</h2><a href="https://terveyskysely.fi">https://terveyskysely.fi</a></div>`;
  const noteDescriptionEncoded = encodeURIComponent(noteDescription);

  return `https://calendar.google.com/calendar/u/0/r/eventedit?text=Varaa%20verenluovutus&dates=${bookDate}&details=${noteDescriptionEncoded}`;
};