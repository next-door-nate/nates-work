import React from "react";

class InlineSVG extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      svgData: "",
      classes: this.props.classes,
    };
  }

  componentDidMount() {
    console.log(this.props.url);

    this.mounted = true;
    fetch(this.props.url)
      .then((response) => response.text())
      .then((data) => {
        if (this.mounted) {
          this.setState({ svgData: data });
        }
      });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <span
        className={this.state.classes}
        dangerouslySetInnerHTML={{ __html: this.state.svgData }}
      ></span>
    );
  }
}

export default InlineSVG;
