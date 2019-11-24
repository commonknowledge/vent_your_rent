/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PostcodeSearch from "../components/PostcodeSearch";
import { RouteComponentProps } from "react-router";
import {
  fontSizeExtraLarge,
  fontColorBlack,
  colorOrange,
  fontSizeMedium
} from "../styles";

const FirstPage: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;

        background-color: ${colorOrange};
        padding: 20px;
        height: 100vh;
      `}
    >
      <header
        css={css`
          ${fontSizeExtraLarge}
          ${fontColorBlack}
          text-transform: uppercase;
        `}
      >
        Vent Your Rent
      </header>
      <div
        css={css`
          margin-top: 20px;
          margin-bottom: 20px;
          ${fontSizeMedium}
        `}
      >
        We all deserve a house we can call home, but for the one in five people
        in the UK renting privately, that’s not the case.
      </div>
      <div
        css={css`
          ${fontSizeMedium}
          font-weight: bold;
          margin-bottom: 15px;
        `}
      >
        What does the renting crisis look like in your area?
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          margin-bottom: 15px;
        `}
      >
        <PostcodeSearch
          onSubmit={postcode => {
            console.log(postcode);
            history.push(`/${postcode}`);
          }}
        />
      </div>
    </div>
  );
};

export default FirstPage;
