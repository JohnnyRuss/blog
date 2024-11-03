type ExistsInParamsT = {
  candidateId: string;
  array: Array<{ [key: string]: any } | string>;
  as?: string;
};

const existsIn = ({ array, candidateId, as }: ExistsInParamsT): boolean =>
  array.some((item) =>
    typeof item === "string"
      ? item === candidateId
      : typeof item === "object" && item[as]
      ? item[as] === candidateId
      : false
  );

export default existsIn;
