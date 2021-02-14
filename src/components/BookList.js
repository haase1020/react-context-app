import React, { Component } from "react";
import ThemeContextProvider, { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        stytle={{ color: theme.syntax, background: theme.bg }}
      >
        <ul>
          <li style={{ background: theme.ui }}>Narnia</li>
          <li style={{ background: theme.ui }}>Frindle</li>
          <li style={{ background: theme.ui }}>Hope was Here</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
