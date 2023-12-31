/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from "react";
import KakaoTalk20230822232Image from "../../styles/signin/SignIn_KakaoTalk_20230822_232627325_1.png";
import Rectangle2Image from "../../styles/signin/SignIn_Rectangle_2.png";
import { styled } from "@mui/material/styles";

const SignIn1 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: "100%",
  height: `1024px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const KakaoTalk20230822232 = styled("img")({
  height: `998px`,
  width: `1080px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `180px`,
  top: `13px`,
});

const Jump = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Nunito`,
  fontWeight: `700`,
  fontSize: `100px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `558px`,
  height: `108px`,
  position: `absolute`,
  left: `444px`,
  top: `214px`,
});

const Rectangle2 = styled("img")({
  height: `51px`,
  width: `420px`,
  position: `absolute`,
  left: `513px`,
  top: `622px`,
});

const Rectangle5 = styled("div")({
  backgroundColor: `rgba(255, 252, 240, 1)`,
  boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
  borderRadius: `14px`,
  width: `420px`,
  height: `51px`,
  position: `absolute`,
  left: `513px`,
  top: `518px`,
});

const Q = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Nunito`,
  fontWeight: `500`,
  fontSize: `25px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `121px`,
  height: `36px`,
  position: `absolute`,
  left: `513px`,
  top: `477px`,
});

const Q1 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Nunito`,
  fontWeight: `500`,
  fontSize: `36px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `510px`,
  top: `335px`,
});

const Q2 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Nunito`,
  fontWeight: `500`,
  fontSize: `25px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `169px`,
  height: `35px`,
  position: `absolute`,
  left: `513px`,
  top: `582px`,
});

const Rectangle7 = styled("div")({
  backgroundColor: `rgba(255, 116, 116, 1)`,
  boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
  borderRadius: `30px`,
  width: `186px`,
  height: `59px`,
  position: `absolute`,
  left: `510px`,
  top: `726px`,
});

const Rectangle21 = styled("div")({
  backgroundColor: `rgba(255, 116, 116, 1)`,
  boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
  borderRadius: `30px`,
  width: `186px`,
  height: `59px`,
  position: `absolute`,
  left: `750px`,
  top: `726px`,
});

const Q3 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 252, 240, 1)`,
  fontStyle: `normal`,
  fontFamily: `Nunito`,
  fontWeight: `600`,
  fontSize: `30px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `99px`,
  height: `49px`,
  position: `absolute`,
  left: `554px`,
  top: `741px`,
});

const Q4 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 252, 240, 1)`,
  fontStyle: `normal`,
  fontFamily: `Nunito`,
  fontWeight: `600`,
  fontSize: `30px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `184px`,
  height: `40px`,
  position: `absolute`,
  left: `752px`,
  top: `741px`,
});

function SignIn(props) {
  return (
    <SignIn1 className={props.className}>
      <KakaoTalk20230822232
        src={KakaoTalk20230822232Image}
        loading="lazy"
        alt={"KakaoTalk_20230822_232627325 1"}
      />
      <Jump>{`JUMP`}</Jump>
      <Rectangle2 src={Rectangle2Image} loading="lazy" alt={"Rectangle 2"} />
      <Rectangle5></Rectangle5>
      <Q>{`아이디`}</Q>
      <Q1>{`홍익대학교 중앙 농구 동아리`}</Q1>
      <Q2>{`패스워드`}</Q2>
      <Rectangle7></Rectangle7>
      <Rectangle21></Rectangle21>
      <Q3>{`로그인`}</Q3>
      <Q4>{`회원가입`}</Q4>
    </SignIn1>
  );
}

export default SignIn;
