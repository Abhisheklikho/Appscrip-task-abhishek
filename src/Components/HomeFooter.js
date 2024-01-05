
import './HomeFooter.css';
// import Flag from '../Images/Group.png';
function HomeFooter() {
    return (
      <div className="HomeFooter">
        {/* <div className="contact">
          <div className="left-contact">
            <h4>BE THE FIRST TO KNOW</h4>
            <p>Sign up for updates from mettā muse.</p>
            <div className="subscribe">
              <input
                type="email"
                id="email"
                name="email"
                value="Enter your e-mail..."
              ></input>
              <input type="submit" value="SUBSCRIBE"></input>
            </div>
          </div>
                <div className="right-contact">
                    <h4>CONTACT</h4>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
                    <h4>CURRENCY</h4>
                    <div><img src={Flag} alt='flag'></img><span>.USD</span></div>
          </div>
        </div> */}
        {/* <div className="followUs"></div> */}
        <div className="copyright">
          <p>Copyright &#169; 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    );
}

export default HomeFooter;