function printCalendar () {
    var calendarId = 'rvividha@gmail.com';
    var apiKey = config.api_key;
    // You can get a list of time zones from here: http://www.timezoneconverter.com/cgi-bin/zonehelp
    var userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (!userTimeZone) {
      userTimeZone = 'India';
    }
    // Initializes the client with the API key and the Translate API.
    gapi.client.init({
      'apiKey': apiKey,
      // Discovery docs docs: https://developers.google.com/api-client-library/javascript/features/discovery
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest']
    }).then(function () {
      // Use Google's "apis-explorer" for research: https://developers.google.com/apis-explorer/#s/calendar/v3/
      // Events: list API docs: https://developers.google.com/calendar/v3/reference/events/list
      return gapi.client.calendar.events.list({
        'calendarId': calendarId,
        'timeZone': userTimeZone,
        'singleEvents': true,
        'timeMin': (new Date()).toISOString(), // gathers only events not happened yet
        'maxResults': 20,
        'orderBy': 'startTime'
      });
    }).then(function (response) {
      console.log(response); // TODO: Remove!
      if (response.result.items) {
        var getNowPlayingDiv = document.getElementById('js-gcal-event'); // Make sure your HTML has This ID!
        // Create a table with events:
        var calendarRows = ['<table class="gcal-event"><tbody>'];
        response.result.items.forEach(function (entry) {
          var eventDate = dayjs(entry.start.dateTime).format('LLL'); // eg: March 26, 2020 6:00 PM
          var eventEndsAt = dayjs(entry.end.dateTime).format('LT'); // eg: 7:00 PM
          calendarRows.push('' +
            '<tr class="gcal-event__tr">' +
              '<td class="gcal-event__td-time">' +
                '<time datetime="' + entry.start.dateTime + '" class="gcal-event__time-start">' + eventDate + '</time> - ' +
                '<time datetime="' + entry.end.dateTime + '" class="gcal-event__time-end">' + eventEndsAt + '</time>' +
              '</td>' +
              '<td class="gcal-event__td-event-name">' + entry.summary + '</td>' +
            '</tr>');
        });
        calendarRows.push('</tbody></table>');
        getNowPlayingDiv.innerHTML = calendarRows.join('');
      }
    }, function (reason) {
      console.log('Error: ' + reason.result.error.message);
    });
  }
  

  // Loads the JavaScript client library and invokes `start` afterwards.
  gapi.load('client', printCalendar);