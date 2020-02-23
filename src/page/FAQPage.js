import * as React from "react";
import HomePage from "./HomePage";

class FAQPage extends HomePage {
    getContent() {
        return (
            <div>
                <h2 className="title_text display-2">FAQ</h2>
                <h3 className="title_text"> Some common questions about being LGBTQ + and the community </h3>
                <div>
                    <h3>This page could possibly use more content</h3>
                    Some ideas
                    <ul>
                        <li>More information, possibly something helpful for parents (or to show parents)</li>
                        <li>What shouldn't you ask *any* LGBTQ+ individual (the trans one still needs to stay though)</li>
                        <li>What resources are available for me (conclusion kinda wrap up i guess with a link to the
                            'signposting' page
                        </li>
                    </ul>
                </div>
                < div >
                    < h3 > What
                        does
                        the
                        LGBTQIA
                        acronym
                        stand
                        for?</
                        h3>
                    <dl className="row">
                        <dt className="col-sm-3">Lesbian:</dt>
                        <dd className="col-sm-9">A woman who has romantic and/or sexual attraction towards women.<br/></dd>

                        <dt className="col-sm-3">Gay:</dt>
                        <dd className="col-sm-9">A man who has romantic and/or sexual attraction towards men.<br/></dd>

                        <dt className="col-sm-3">Bisexual:</dt>
                        <dd className="col-sm-9">An umbrella term used to describe a person with a romantic and/or sexual attraction
                            to more than one
                            gender.<br/></dd>

                        <dt className="col-sm-3">Trans:</dt>
                        <dd className="col-sm-9">An umbrella term used to describe people whose gender is not the same as, does not
                            sit comfortably with, the sex they
                            were assigned at birth. This can be within the binary genders of male or female, or away from which would
                            make them non-binary.<br/></dd>

                        <dt className="col-sm-3">Queer/Questioning:</dt>
                        <dd className="col-sm-9">Queer is a term used by those wanting to reject specific labels of sexuality and gender.
                            Questioning is the process of exploring your sexuality and/or gender<br/></dd>

                        <dt className="col-sm-3">Intersex:</dt>
                        <dd className="col-sm-9">A term used to describe a person who may not have the biological attributes of how society views
                            male or female.<br/></dd>

                        <dt className="col-sm-3">Ace:</dt>
                        <dd className="col-sm-9">An umbrella term used to describe a variation in levels of romantic and/or sexual attraction,
                            including a lack of attraction.<br/> </dd>

                    </dl>
                    <h3>Is it a choice? </h3>
                    <p>
                        Being trans/gay etc. is not a choice, just as being cisgender or heterosexual isn’t a choice.
                    </p>

                    <h3>What shouldn’t I ask a transgender person?</h3>
                    <ul>
                        <li>You shouldn’t ask a transgender person what their pervious name was if they decide to change it as it can be
                            triggering for the person.</li>
                        <li>You shouldn’t ask intimate questions. It is only the business of the transgender person. </li>
                        <li>Understand that the transgender person will confide in you about surgery and other issues in their own
                            time, if they decide they want to. </li>
                    </ul>
                    <h3>What is binding? </h3>
                    <p>
                        Binding is done by transgender people in attempt at flattening their chest, using some of the following: chest binder, tape, bandages and KT tape.
                    </p>
                    <p>
                        Many people cannot afford the suggested methods of binding (tank chest binder) or are forbidden from doing so by family members who disagree. Therefore they resort to unsafe methods, such as tape or bandages. Unsafe methods can cause severe damage to the flesh and tissue, making future surgeries very difficult or sometimes impossible.
                        If you discover your child is binding unsafely, or wants to start binding, make sure you provide them with safe methods only recommended by professionals.
                    </p>
                </div>
            </div>);
    }
}
export default FAQPage;
        
