import React from 'react';


class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      currentContent: this.props.tabsProp[0].content
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    e.preventDefault();
    const tab = e.target.innerHTML;
    this.fetchContent(tab);
  }

  fetchContent (tab) {
    for (let i = 0; i < this.props.tabsProp.length; i++) {
      if (this.props.tabsProp[i].title === tab) {
        this.setState({index: tab, currentContent: this.props.tabsProp[i].content});
        return;
      }
    }
  }

  render() {
    return (
      <div className="tabs">
        <h1 className="tab-title">Tabs</h1>
        <div className="tab-container">
          <ul className="tab-header">
            <li onClick={this.handleClick}>one</li>
            <li onClick={this.handleClick}>two</li>
            <li onClick={this.handleClick}>three</li>
          </ul>
          <main className="tab-main">{this.state.currentContent}</main>
        </div>
      </div>
    );
  }
}



export default Tabs;
