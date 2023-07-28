// src/controllers/content_loader_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { url: String, refreshInterval: Number}

  connect() {
    this.load()
    // this.load_params()
    // if (this.hasRefreshIntervalValue) {
    //   this.startRefreshing()
    // }
  }

  disconnect() {
    this.stopRefreshing()
  }

  startRefreshing() {
    this.refreshTimer = setInterval(() => {
      this.load()
    }, this.refreshIntervalValue)
  }

  stopRefreshing() {
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer)
    }
  }

  // load({ params }) {
  //   fetch(params.url)
  //     .then(response => response.text())
  //     .then(html => this.element.innerHTML = html)
  // }

  // loadTemplate( { params } ) {
  //   fetch(params.url)
  //     .then(response => response.text())
  //     .then(html => this.element.innerHTML = html)
  // }

  load() {
    fetch(this.urlValue)
      .then(response => response.text())
      .then(html => this.element.innerHTML = html)
  }
}