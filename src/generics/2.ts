type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type certainTypes = Pick<AllType, "name" | "position" | "color" | "weight">;

function compare(top: certainTypes, bottom: certainTypes): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
