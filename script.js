
function myFunction(){
 let request = new XMLHttpRequest()
request.onreadystatechange = function() {
  if (this.readyState === 4) {
    console.log(this.status)
    console.log(this.responseText)
  }
}
request.open("POST", "https://events-api.notivize.com/applications/a8b922d9-7671-4fdf-8b12-b6b5f7547070/event_flows/12d6743e-51cd-404e-a748-6aaa7267dd3a/events", true)
request.setRequestHeader("Content-Type", "application/json")
request.send(JSON.stringify({"class": "ECON 101", "class_amount": "3", "student": "19513176514"}))
}
 alert("hello world");