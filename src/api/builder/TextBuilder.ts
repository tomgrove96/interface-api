import { Text } from "../component/Text";
import { RGBAColor } from "../color/RGBAColor";
import { Vector2 } from "../math/Vector2";

export class TextBuilder {
  private static instance: TextBuilder;
  private text = new Text("");

  private constructor() {}

  public static getInstance() {
    if (!TextBuilder.instance) {
      TextBuilder.instance = new TextBuilder();
    }
    return TextBuilder.instance;
  }

  public setID(id: string): TextBuilder {
    this.text.props.id = id;
    return this;
  }
  public setText(text: string): TextBuilder {
    this.text.value = text;
    return this;
  }
  public setFont(font: string): TextBuilder {
    this.text.font = font;
    return this;
  }
  public setSize(size: string): TextBuilder {
    this.text.size = size;
    return this;
  }
  public setColor(color: RGBAColor): TextBuilder {
    this.text.color = color;
    return this;
  }
  public setWeight(weight: string): TextBuilder {
    this.text.weight = weight;
    return this;
  }
  public setAlign(align: string): TextBuilder {
    this.text.align = align;
    return this;
  }
  public setStyle(style: string): TextBuilder {
    this.text.style = style;
    return this;
  }
  public setLetterSpacing(letterSpacing: string): TextBuilder {
    this.text.letterSpacing = letterSpacing;
    return this;
  }
  public setWordSpacing(wordSpacing: string): TextBuilder {
    this.text.wordSpacing = wordSpacing;
    return this;
  }
  public setLineHeight(lineHeight: string): TextBuilder {
    this.text.lineHeight = lineHeight;
    return this;
  }
  public setShadow(shadow: Vector2): TextBuilder {
    this.text.shadow = shadow;
    return this;
  }

  public build(): Text {
    return this.text;
  }
}
