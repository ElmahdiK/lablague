interface Blague {
  title: string;
  text: string;
  handleClick: () => void;
}

export default function BlagueCard(props: Blague) {
  const { title, text, handleClick } = props;
  return (
    <>
      <style>
        {` 
        div {
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            background: #fff;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            width: 40%;
        }
        p { 
            padding: 20px;
        } 
        .title {    
          background: #000;
            color: #fff;
            font-size: 22px;
            font-weight: bold;
        }
        .text {
          color: #000;
          border-bottom: 1px dashed #ccc;
          text-align: justify;
        }
        button:hover {
            background-color: #fff;
            color: #000;
        }
        button {
            background-color: #000;
            color: #fff;
            border:1px solid #111;
            align-self: flex-end;
            padding:14px;
            cursor:pointer;
            text-transform: uppercase;
            margin: 20px 0px;
            margin-right: 20px;
        }

        @media screen and (max-width: 700px) {
            div {
                width: 90%;
            }
        }
      `}
      </style>

      <p className="title">{title}</p>
      {text && <p className="text">{text}</p>}
      {/* <img src={text} alt={title} width="400" /> */}

      <button onClick={handleClick}>blague suivante</button>
    </>
  );
}
