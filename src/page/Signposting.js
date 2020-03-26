// Copyright (C) 2020 Natasha England-Elbro
// 
// This file is part of ImpactWebsiteFrontend.
// 
// ImpactWebsiteFrontend is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// ImpactWebsiteFrontend is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with ImpactWebsiteFrontend.  If not, see <http://www.gnu.org/licenses/>.

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
