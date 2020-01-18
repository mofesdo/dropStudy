let request = new XMLHttpRequest()
request.onreadystatechange = function() {
  if (this.readyState === 4) {
    console.log(this.status)
    console.log(this.responseText)
  }
}
request.open("POST", "https://events-api.notivize.com/applications/5bf6be6b-68f2-4b9b-aa10-09725743fbe3/event_flows/e54a1e20-9338-4034-839a-75f09c456288/events", true)
request.setRequestHeader("Content-Type", "application/json")
request.send(JSON.stringify({"class": "<2>", "student": "<9513176514>"}))