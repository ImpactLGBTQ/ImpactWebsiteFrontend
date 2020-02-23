import * as React from "react";
import MainPage from "./MainPage";


class Signposting extends MainPage {

    getContent() {
        return (
          <div>
              <h2>THIS PAGE NEEDS MORE CONTENT</h2>
              <p>Some ideas</p>
              <ul>
                  <li>Explanation of each of the links</li>
                  <li>More numbers</li>
              </ul>
              <h1 className="title_text">Signposting</h1>
              <p>
                  This page contains contact details for other LGBTQ+ groups, helplines, information on the community,
                  trans
                  information websites, and more
              </p>
              <h3>Numbers</h3>
              <p>
                  Stonewall 0800 0502020
              </p>
              <h3>Links</h3>
              <p>
                  Stonewall cyrmu: <a href="https://www.stonewallcymru.org.uk/help-and-advice">
                  https://www.stonewallcymru.org.uk/help-and-advice</a>
                  <br/>
                      Umbrella cymru: <a href="https://www.umbrellacymru.co.uk/"> https://www.umbrellacymru.co.uk/ </a>
                      <br/>
                          Childline: <a href=" https://www.childline.org.uk/"> https://www.childline.org.uk/ </a>
                          <br/>
                              Samaritans: <a href="https://www.samaritans.org/how-we-can-help/support-and-information/">
                              https://www.samaritans.org/how-we-can-help/support-and-information/</a>
                              <br/>
                                  Mermaids: <a href="https://mermaidsuk.org.uk/">https://mermaidsuk.org.uk/</a>
                                  <br/>
                                      Pride Cymru: <a href="https://www.pridecymru.com/">https://www.pridecymru.com/</a>
                                      <br/>
                                          FFLAG: <a href="https://www.fflag.org.uk">www.fflag.org.uk</a>
              </p>
          </div>
        );
    }


}

export default Signposting;
