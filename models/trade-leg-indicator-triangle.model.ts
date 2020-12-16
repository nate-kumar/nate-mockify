import { 
  TriangleColourEnum,
  TriangleDirectionEnum,
  TriangleWeightEnum
} from '../_enums/trade-leg-indicator-triangle.enum';

export class TradeLegIndicatorTriangleModel {
  colour: TriangleColourEnum;
  pointing: TriangleDirectionEnum;
  weight: TriangleWeightEnum;

  constructor( 
    colour: TriangleColourEnum,
    pointing: TriangleDirectionEnum,
    weight: TriangleWeightEnum = TriangleWeightEnum.bold
  ) {
    this.colour = colour;
    this.pointing = pointing;
    this.weight = weight;
  }
}
