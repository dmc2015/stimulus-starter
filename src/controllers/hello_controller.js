import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["name"]
  connect() {
    console.log('test', this)    
  }
  greet(event) {
    event.preventDefault()
    // console.log(`hello ${this.nameTarget.value}`)
    return this.nameTarget.value
  }
}