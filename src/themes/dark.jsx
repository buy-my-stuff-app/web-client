import Theme from "./Theme";

class Dark extends Theme {
  constructor() {
    super();

    this.fontSize = "1.6rem";
    this.fontFamily = "Roboto, sans-serif";
    this.bgColorPrimary = "#1C1C1C";
    this.bgColorSecondary = "#272932";
    this.bgColorTertiary = "#393E41";
    this.textColorPrimary = "#FAFAFF";
    this.textColorSecondary = "#ADBABD";
    this.textColorTertiary = "#CEE5F2";
    this.primaryColor = "#1481BA";
    this.secondaryColor = "#C49991";
    this.tertiaryColor = "#3F5E5A";
    this.success = "#32746D";
    this.info = "#93B7BE";
    this.warning = "#F1AB86";
    this.error = "#880D1E";
  }
}

export default new Dark();
