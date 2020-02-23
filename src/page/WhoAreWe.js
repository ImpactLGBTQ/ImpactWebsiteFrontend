import * as React from "react";
import MainPage from "./MainPage";

class WhoAreWe extends MainPage {

    getContent() {
        return (
          <div>
              <div>
                  <h3>This page could use more content</h3>
                  Some ideas
                  <ul>
                      <li>Personal stories from members of Impact</li>
                      <li>Pictures: Impact members, group photo, volunteer and staff headshots and group photo(s)</li>
                  </ul>
              </div>
              <h1 className="title_text display-2">Who are we</h1>
              <h4>Impact is...</h4>
              <p>
                  Impact is an LGBTQIA+ youth group which celebrates the positives of our community and embraces
                  individuality
                  of all people.
                  <br/><br/>
                      We promote teamwork and group bonding opportunities such as; camping trips, pride outings and also
                      host a
                      variety of drag show fundraisers.
                      <br/><br/>
                          We also offer support for people in need of counselling with many of our volunteers qualified
                          and experienced
                          in working with young people and especially with neurodiverse young people.
              </p>


              <div>
                  <h2 className="title_text">Our wonderful volunteers and staff</h2>
                  <p className="lead">
                      Impact is kept running by an amazing group of volunteers and staff whose dedication, commitment
                      and just
                      all around
                      awesomeness <strong><i>cannot</i></strong> be understated.
                  </p>
                  <p className="lead">
                      This is a list of statements from them about who they are, why they come to the group, and what
                      keeps
                      them coming back
                  </p>

                  <h3 className="volunteer_header">Sarah</h3>
                  <p>
                      Hi, I’m Sarah and my pronouns are they/them. I’ve been volunteering with Impact for over 5 years
                      and now
                      am lucky enough to work here! I also work for another charity, and spend my spare time horse
                      riding, and
                      volunteering at a few other places.
                      <br/><br/>
                          I’ve lived in Cardiff for 10 years since coming to uni and I love it! Coming to group is one
                          of my
                          favorite things to do, seeing how it has grown over the years, going from
                          strength to strength!
                  </p>
                  <h3 className="volunteer_header">James</h3>
                  <p>
                      My name is James I am genderqueer and bi so use they/them pronouns. I volunteer at Impact because
                      I feel
                      young people should have a place they can be themselves and meet with other young people like
                      themselves.
                      I also work as a counsellor and artist and have children who are part of the LGBTQ+ community.
                  </p>
                  <h3 className="volunteer_header">Kodi</h3>
                  <p>
                      Hi, my name is Kodi, I am 21 years old my pronouns are he/him. I came to impact as a young person
                      and now
                      I am a volunteer at impact. I am also on uni placement here. I have 9 pets. As well as my love for
                      animals I am also interested in psychology.
                  </p>
                  <h3 className="volunteer_header">Georgia</h3>
                  <p>
                      My name is Georgia; my pronouns are she/her. I am on an MA in youth and community work at Cardiff
                      Met. I
                      have been on placement at Impact since the start of October 2019. I also work as a teaching
                      assistant at
                      a secondary school within an ASD base. I write plays, make comedy and cuddle my cat in my spare
                      time.
                  </p>
                  <h3 className="volunteer_header">Jamie</h3>
                  <p>
                      I’m Jamie, my pronouns are they/ them and I have been a volunteer at Impact since August 2018. I
                      got
                      involved with Impact through volunteering with mental health non-profit Heads Above the Waves, and
                      while
                      I was a student at Cardiff University I was the disabled students rep and then transgender student
                      rep on
                      the LGBT+ Association Committee. I recently spent 2 months in Swedish Lapland working with sled
                      dogs,
                      and I’m known for my purple hair!
                  </p>
                  <h3 className="volunteer_header">Katy</h3>
                  <p>
                      Hey, my name’s Katy. I am a volunteer for the youth group and have been here for a couple of
                      months. I am
                      non binary and use they/them pronouns. I decided to volunteer with the group as it gives young
                      LGBTQ
                      people somewhere to come and we can give them support as well as just have fun! I am the human
                      carer of
                      the puppies and am a qualified animal trainer.
                  </p>
                  <h3 className="volunteer_header">Miles</h3>
                  <p>
                      My name is Miles and I’m one of the youth workers who help run the Impact youth club. I’ve worked
                      at
                      Impact since October 2019 and at Cathays Community Centre for two years before that having
                      completed my
                      Level 2 in Youth Work in June(?) 2019. Outside of the club I help the community centre put on gigs
                      and
                      other events for young people to take part in.
                      <br/>
                          I hail from Wiltshire, have lived in Cardiff since 2011 and spend my time out of the club
                          making music and chilling
                          with my cat. Pronouns are He/Him.
                  </p>
                  <h3 className="volunteer_header">THE PUPPIES</h3>
                  <p>
                      Our names our Cobalt (blue eyes) and Maggie (brown eyes) and we are Border Collie puppies! We’re
                      sisters
                      who belong to Sarah and Katy and are the official mascots/ therapy dogs in training/ cute cuddly
                      friends
                      of the youth club. We were born at the end of September 2019 and will hopefully be growing up with
                      Impact on Tuesday evenings. Come to club and stroke our incredibly soft ears!
                  </p>
              </div>
          </div>
        );
    }
}

export default WhoAreWe;

