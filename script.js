let request = new XMLHttpRequest()
request.onreadystatechange = function() {
  if (this.readyState === 4) {
    console.log(this.status)
    console.log(this.responseText)
  }
}
request.open("POST", "https://events-api.notivize.com/applications/5bf6be6b-68f2-4b9b-aa10-09725743fbe3/event_flows/fac86153-83a2-4292-ac18-7b252a223ef7/events", true)
request.setRequestHeader("Content-Type", "application/json")
request.send(JSON.stringify({"create": "<value for create>", "lifecycle_stage": "<value for lifecycle_stage>", "student": "<value for student>", "studier": "<value for studier>"}))
