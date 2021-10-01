import { Dispatch, SetStateAction } from "react";
import "../reviewForm/ReviewForm.css";

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

  const selectOptions = createArrayInRange(range, startAt).map((num) => {
    return (
      <option key={num} value={`${num}`}>
        {num}
      </option>
    );
  });

  return (
    <select
      value={selectValue}
      name={selectName}
      onChange={(e) => set(e.target.value)}
    >
      {selectOptions}
    </select>
  );
};

export default DynamicSelect;
