export default function testSetCSS(currentTheme, className) {
  const { palette, spacing, text } = currentTheme;
  // console.log('====', spacing.x_tiny);
    const style = `
      .${className} * {
          font-family: Gotham-Book, Roboto, sans-serif;
      }
      
      .${className} div {
          color: ${palette.textColor};
          /*color: red;*/
          background-color: ${palette.canvasColor};
          border-width: 1px;
          border-color: ${palette.borderColor};
          font-size: 16px;
      }

      .${className} button {
      }
      
      .${className} .iconTest {
          fill: ${palette.iconColor};
      }

      .${className} button.weiTestButton {
          color: ${palette.text_black};
          background: ${palette.main_gold_light};
          border-color: ${palette.main_gold_light};
      }
      .${className} div.cardSelectionBase {
      }
      .${className} .space_inset_m {
         padding: ${spacing.space_m};
      }
      .${className} .space_inset_s {
         padding: ${spacing.space_s};
      }
      .${className} .space_inset_l {
         padding: ${spacing.space_l};
      }
      .${className} .h1, h2, h3, h4, h5, h6 {
         line-height: ${spacing.lineHeight};
      }
    `;
    return style;
}
