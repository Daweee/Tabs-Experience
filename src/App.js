import Title from "./components/Title";
import TabButtons from "./components/TabButtons";
import JobInfo from "./components/JobInfo";
import FootButton from "./components/FootButton";
import { useState } from "react";

function App() {
  //declaring active tab useState here
  const [activeTab, setActiveTab] = useState(1);

  //function for setting active tab
  const toggleTab = (id) => {
    setActiveTab(id);
  };

  //array of job active tabs
  const jobs = [
    {
      id: 1,
      title: "Full Stack Web Developer",
      company: "TOMMY",
      date: "December 2015 - Present",
      description1:
        "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
      description2:
        "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
      description3:
        "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.",
    },
    {
      id: 2,
      title: "Front-End Engineer",
      company: "BIGDROP",
      date: "May 2015 - December 2015",
      description1:
        "Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid.",
      description2:
        "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester",
      description3:
        "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1",
      description4:
        "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1",
    },
    {
      id: 3,
      title: "Engineering Intern",
      company: "CUKER",
      date: "May 2014 - September 2015",
      description1:
        "I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free.",
      description2:
        "YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.",
      description3:
        "Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism.",
    },
  ];

  //shows the job info on the currently selected tab
  const activeTabInfo = jobs.filter((job) => job.id === activeTab)[0];

  return (
    <>
      <section className="section">
        <div className="title">
          <Title />
        </div>
        <div className="jobs-center">
          <TabButtons jobs={jobs} activeTab={activeTab} toggleTab={toggleTab} />
          <article className="job-info">
            <JobInfo activeTabInfo={activeTabInfo} />
          </article>
        </div>
      </section>
      <FootButton />
    </>
  );
}

export default App;
