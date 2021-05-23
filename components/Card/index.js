const Card = (props) => (
  <div
    {...props}
    style={{
      ...props.style,
      ...{
        width: props.width ? props.width : 'inherit',
        height: props.height ? props.height : 'inherit',
        maxWidth: props.maxWidth ? props.maxWidth : 'inherit',
        maxHeight: props.maxHeight ? props.maxHeight : 'inherit',
      },
    }}
    className="card"
  >
    {props.children}
  </div>
);

export default Card;
