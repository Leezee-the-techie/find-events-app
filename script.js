function searchEvents() {
    const searchInput = document.getElementById('search').value;
    const token = 'YZFLHAUXKKMNUBOVWGQJ'; // Replace with your Eventbrite API token

    const url = `https://www.eventbriteapi.com/v3/events/search/?q=${searchInput}&token=${token}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        displayEvents(data.events);
      })
      .catch(error => console.error('Error fetching events:', error));
  }

  function displayEvents(events) {
const eventsList = document.getElementById('events-list');
eventsList.innerHTML = '';

if (!events || events.length === 0) {
  const noEventsMessage = document.createElement('p');
  noEventsMessage.textContent = 'No events found';
  eventsList.appendChild(noEventsMessage);
  return;
}

events.forEach(event => {
  const eventCard = document.createElement('div');
  eventCard.classList.add('event-card');

  const eventName = document.createElement('h3');
  eventName.textContent = event.name.text;

  const eventDescription = document.createElement('p');
  eventDescription.textContent = event.description.text || 'No description available';

  const eventUrl = document.createElement('a');
  eventUrl.href = event.url;
  eventUrl.textContent = 'Event Details';

  eventCard.appendChild(eventName);
  eventCard.appendChild(eventDescription);
  eventCard.appendChild(eventUrl);

  eventsList.appendChild(eventCard);
});
}