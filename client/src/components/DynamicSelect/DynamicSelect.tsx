type DynamicSelectProps = {
  range: number;
  startAt?: number;
  selectValue: string;
  selectName: string;
  header?: string;
  set: Dispatch<SetStateAction<string>>;
};

const DynamicSelect = ({
  range,
  startAt,
  selectValue,
  selectName,
  set,
  header,
}: DynamicSelectProps) => {
  function createArrayInRange(
    size: number,
    startAt: number = 0
  ): ReadonlyArray<number> {
    return [...Array(size).keys()].map((num) => num + startAt);
  }
};

export default DynamicSelect;
