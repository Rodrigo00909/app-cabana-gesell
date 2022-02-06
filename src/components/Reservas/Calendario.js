import React from 'react'
import Calendar from 'rc-year-calendar';
const currentYear = new Date().getFullYear();

class MyCalendar extends React.Component {
  constructor() {
    super();
    this.state = {
      currentYear: new Date().getFullYear(),
      minDate: null,
      maxDate: null,
      language: 'en',
      style: 'background',
      allowOverlap: true,
      enableRangeSelection: false,
      displayWeekNumber: false,
      roundRangeLimits: false,
      alwaysHalfDay: false };

  }

  renderInput(id, name, input) {
    return  (
      React.createElement("div", { className: "col-lg-3 col-md-4 col-sm-6 row field" },  
      React.createElement("label", { htmlFor: id, className: "col-sm-6 col-form-label" }, name),
      input));
  }

  render() {
    return  (
      React.createElement("div", null,  
      React.createElement("div", { className: "card" },  
      React.createElement("div", { className: "card-header" }, "Parameters"),  
      React.createElement("div", { className: "card-body row" },
      this.renderInput("current-year", "Current year",  
      React.createElement("input", { type: "number", className: "form-control col-sm-6", id: "current-year", value: this.state.currentYear, onChange: e => this.setState({ currentYear: e.target.valueAsNumber }) })),

      this.renderInput("min-date", "Min date",  
      React.createElement("input", { type: "date", className: "form-control col-sm-6", id: "min-date", value: this.state.minDate ? this.state.minDate.toISOString().substr(0, 10) : null, onChange: e => this.setState({ minDate: e.target.valueAsDate }) })),

      this.renderInput("max-date", "Max date",  
      React.createElement("input", { type: "date", className: "form-control col-sm-6", id: "max-date", value: this.state.maxDate ? this.state.maxDate.toISOString().substr(0, 10) : null, onChange: e => this.setState({ maxDate: e.target.valueAsDate }) })),

      this.renderInput("language", "Language",  
      React.createElement("select", { className: "form-control col-sm-6", id: "language", onChange: e => this.setState({ language: e.target.value }) },  
      React.createElement("option", { value: "nl" }, "Dutch"),  
      React.createElement("option", { value: "en", selected: true }, "English"),  
      React.createElement("option", { value: "fr" }, "French"),  
      React.createElement("option", { value: "de" }, "German"),  
      React.createElement("option", { value: "it" }, "Italian"),  
      React.createElement("option", { value: "ja" }, "Japanese"),  
      React.createElement("option", { value: "pt" }, "Portuguese"),  
      React.createElement("option", { value: "ru" }, "Russian"),  
      React.createElement("option", { value: "es" }, "Spanish"),  
      React.createElement("option", { value: "tr" }, "Turkish"))),


      this.renderInput("style", "Style",  
      React.createElement("div", { className: "col-sm-6" },  
      React.createElement("div", null,  React.createElement("input", { type: "radio", name: "style", defaultChecked: this.state.style == "background", onChange: e => this.setState({ style: "background" }) }), " Background"),  
      React.createElement("div", null,  React.createElement("input", { type: "radio", name: "style", defaultChecked: this.state.style == "border", onChange: e => this.setState({ style: "border" }) }), " Border"))),


      this.renderInput("allow-overlap", "Allow overlap",  
      React.createElement("input", { type: "checkbox", id: "allow-overlap", className: "col-sm-6", defaultChecked: this.state.allowOverlap, onChange: e => this.setState({ allowOverlap: e.target.checked }) })),

      this.renderInput("range-selection", "Range selection",  
      React.createElement("input", { type: "checkbox", id: "range-selection", className: "col-sm-6", defaultChecked: this.state.enableRangeSelection, onChange: e => this.setState({ enableRangeSelection: e.target.checked }) })),

      this.renderInput("week-number", "Weeks number",  
      React.createElement("input", { type: "checkbox", id: "week-number", className: "col-sm-6", defaultChecked: this.state.displayWeekNumber, onChange: e => this.setState({ displayWeekNumber: e.target.checked }) })),

      this.renderInput("round-limits", "Round limits",  
      React.createElement("input", { type: "checkbox", id: "round-limits", className: "col-sm-6", defaultChecked: this.state.roundRangeLimits, onChange: e => this.setState({ roundRangeLimits: e.target.checked }), disabled: this.state.style != "background" })),

      this.renderInput("half-day", "Always half day",  
      React.createElement("input", { type: "checkbox", id: "half-day", className: "col-sm-6", defaultChecked: this.state.alwaysHalfDay, onChange: e => this.setState({ alwaysHalfDay: e.target.checked }), disabled: this.state.style != "background" })))),  



      React.createElement("div", { className: "card" },  
      React.createElement("div", { className: "card-header" }, "Calendar"),  
      React.createElement("div", { className: "card-body" },  
      React.createElement(Calendar, {
        year: this.state.currentYear,
        minDate: this.state.minDate,
        maxDate: this.state.maxDate,
        language: this.state.language,
        style: this.state.style,
        allowOverlap: this.state.allowOverlap,
        enableRangeSelection: this.state.enableRangeSelection,
        displayWeekNumber: this.state.displayWeekNumber,
        roundRangeLimits: this.state.roundRangeLimits,
        alwaysHalfDay: this.state.alwaysHalfDay,
        dataSource: [
        {
          startDate: new Date(currentYear, 1, 4),
          endDate: new Date(currentYear, 1, 15) },

        {
          startDate: new Date(currentYear, 3, 5),
          endDate: new Date(currentYear, 5, 15) }] })))));
  }}

export default MyCalendar;