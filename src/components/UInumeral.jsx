import numeral from 'numeral';

const UInumeral = ({ format, children }) => {
  return <span>{numeral(children).format(format)}</span>;
};

export default UInumeral;
