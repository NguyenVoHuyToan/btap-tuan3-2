import React from "react";
import HeaderComponent from "../component/pageHeader/HeaderComponent";
import Date from "./Date";
import "./Detail.css";
import ImgDeatil from "./ImgDeatil";
import Time from "./Time";
import TitleDetail from "./TitleDetail";
import Address from "./Address";
import People from "./People";

function DetailComponent() {
  return (
    <div className="container-detail">
      <HeaderComponent />
      <div className="top-detail">
        <div className="left-detail">
          <TitleDetail title="Web3 Founders & Designers Mixer + fireside chat with Coinbase Senior Designer & Airfoil founder" />
        </div>
        <ImgDeatil image="https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/image?url=https%3A%2F%2Fsupermomos-app-resources-us.s3.amazonaws.com%2FImages%2FSocialBanner%2Fbanner_1.jpg&w=1920&q=75" />
      </div>
      <div className="info-detail">
        <Date
          image="https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/logo-date.cf31b5b1.svg"
          title="October 11, Wed"
        />
        <Time
          image="https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/logo-time.0e52cc09.svg"
          title="7 PM"
        />
      </div>
      <div className="add-detail">
        <Address
          image="https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/logo-address.634396fa.svg"
          title="Chelsea Market (163 W 20nd Street). Manhattan, NYC"
        />
      </div>
      <div className="people">
        <People
          image="https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/logo-maxcacipi.35d06c6a.svg"
          title="50 people"
        />
        <People
          image="https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/logo-cost.0cbac456.svg"
          title="$30"
        />
      </div>
      <div className="note">
        <TitleDetail
          title="Calling all web3 founders and designers for an exciting night of exchanging ideas and making new friends! Come make friends with fellow designers and founders in web3. There will also be lots of insights to be gained through an intimate chat +Q&A with two giants in the industry:

                Phil Hedayatnia, Founder & CEO of Airfoil, a growth design studio that has designed and built products in web3, the creator economy, the future of work, and much more for 80+ startups since 2018

                Jihoon Suh, Senior Product Designer at Coinbase, who was previously Senior Product Designer for Messenger for Meta.

                This will be a curated group with limited spots, so do sign up early!

                About Airfoil:

                Airfoil Studio is the design, branding, and engineering team helping web3 take flight. As one of crypto’s first large-scale design firms, our mission is to design a friendlier financial layer for the internet. We’re a team of 85+ creatives, working from Airfoil’s hubs in Toronto, Singapore, and Seoul, who’ve worked on 100+ projects since 2018, including Solana Pay, Drift Protocol, Bonfida Solana Name Service, Utopia Labs, Planetarium, Layer3.xyz, MarginFi, Hyperspace, VBA Game, and more.

                Learn more about Airfoil and our work at airfoil.studio."
        />
      </div>
    </div>
  );
}

export default DetailComponent;
