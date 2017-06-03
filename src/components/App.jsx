import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import AnimateHeaderFooter from './AnimateHeaderFooter'

import '../assets/stylesheets/base.scss'
import img from '../assets/images/Logo_ComingSoon_1024.png'

class App extends Component {
  render () {
    return (
      <div>
        <AnimateHeaderFooter />
        <Header />
        <div className='container' id='fullpage'>
          <section className='section'>
            <img className='logo' src={img} />
          </section>
          <section className='section'>
            <p>Lorem ipsum dolor sit amet, lorem elementum fusce mauris, dolor vestibulum magna temporibus nec metus, ac commodo urna eros vitae ornare lectus. Orci pellentesque at dolor vitae, massa nonummy sit interdum eget, nec nunc pellentesque wisi
                mauris wisi eget. Turpis accusamus ultrices rutrum tempor lorem, ligula. Curabitur quam suscipit consectetuer erat convallis nec, vel aliquam, cras mauris, eget quam, neque condimentum nonummy sem. </p>
            <p>Lorem ipsum dolor sit amet, lorem elementum fusce mauris, dolor vestibulum magna temporibus nec metus, ac commodo urna eros vitae ornare lectus. Orci pellentesque at dolor vitae, massa nonummy sit interdum eget, nec nunc pellentesque wisi
                mauris wisi eget. Turpis accusamus ultrices rutrum tempor lorem, ligula. Curabitur quam suscipit consectetuer erat convallis nec, vel aliquam, cras mauris, eget quam, neque condimentum nonummy sem. </p>
            <p>Lorem ipsum dolor sit amet, lorem elementum fusce mauris, dolor vestibulum magna temporibus nec metus, ac commodo urna eros vitae ornare lectus. Orci pellentesque at dolor vitae, massa nonummy sit interdum eget, nec nunc pellentesque wisi
                mauris wisi eget. Turpis accusamus ultrices rutrum tempor lorem, ligula. Curabitur quam suscipit consectetuer erat convallis nec, vel aliquam, cras mauris, eget quam, neque condimentum nonummy sem. </p>
            <p>Lorem ipsum dolor sit amet, lorem elementum fusce mauris, dolor vestibulum magna temporibus nec metus, ac commodo urna eros vitae ornare lectus. Orci pellentesque at dolor vitae, massa nonummy sit interdum eget, nec nunc pellentesque wisi
                mauris wisi eget. Turpis accusamus ultrices rutrum tempor lorem, ligula. Curabitur quam suscipit consectetuer erat convallis nec, vel aliquam, cras mauris, eget quam, neque condimentum nonummy sem. </p>
          </section>
          <section className='section'><a href='#link-here'>Link</a>
            <p>dolor sit amet, lorem elementum fusce mauris, dolor vestibulum magna temporibus nec metus, ac commodo urna eros vitae ornare lectus. Orci pellentesque at dolor vitae, massa nonummy sit interdum eget, nec nunc pellentesque wisi mauris wisi
                eget. Turpis accusamus ultrices rutrum tempor lorem, rutrum dis leo aenean volutpat proin. Diam nullam diam id nostra lectus, nulla dapibus. Scelerisque felis quisque et ipsum feugiat, sollicitudin ullamcorper lacus egestas est accumsan,
                at blanditiis mi, semper ligula. Est eu eu curabitur tellus turpis, quia quam. Mauris morbi nec, ultrices ornare, elit egestas ut euismod orci adipiscing, velit ligula mi, velit etiam aliquam quis</p>
            <p>dolor sit amet, lorem elementum fusce mauris, dolor vestibulum magna temporibus nec metus, ac commodo urna eros vitae ornare lectus. Orci pellentesque at dolor vitae, massa nonummy sit interdum eget, nec nunc pellentesque wisi mauris wisi
                eget. Turpis accusamus ultrices rutrum tempor lorem, rutrum dis leo aenean volutpat proin. Diam nullam diam id nostra lectus, nulla dapibus. Scelerisque felis quisque et ipsum feugiat, sollicitudin ullamcorper lacus egestas est accumsan,
                at blanditiis mi, semper ligula. Est eu eu curabitur tellus turpis, quia quam. Mauris morbi nec, ultrices ornare, elit egestas ut euismod orci adipiscing, velit ligula mi, velit etiam aliquam quis</p>
            <p>dolor sit amet, lorem elementum fusce mauris, dolor vestibulum magna temporibus nec metus, ac commodo urna eros vitae ornare lectus. Orci pellentesque at dolor vitae, massa nonummy sit interdum eget, nec nunc pellentesque wisi mauris wisi
                eget. Turpis accusamus ultrices rutrum tempor lorem, rutrum dis leo aenean volutpat proin. Diam nullam diam id nostra lectus, nulla dapibus. Scelerisque felis quisque et ipsum feugiat, sollicitudin ullamcorper lacus egestas est accumsan,
                at blanditiis mi, semper ligula. Est eu eu curabitur tellus turpis, quia quam. Mauris morbi nec, ultrices ornare, elit egestas ut euismod orci adipiscing, velit ligula mi, velit etiam aliquam quis</p>
            <p>dolor sit amet, lorem elementum fusce mauris, dolor vestibulum magna temporibus nec metus, ac commodo urna eros vitae ornare lectus. Orci pellentesque at dolor vitae, massa nonummy sit interdum eget, nec nunc pellentesque wisi mauris wisi
                eget. Turpis accusamus ultrices rutrum tempor lorem, rutrum dis leo aenean volutpat proin. Diam nullam diam id nostra lectus, nulla dapibus. Scelerisque felis quisque et ipsum feugiat, sollicitudin ullamcorper lacus egestas est accumsan,
                at blanditiis mi, semper ligula. Est eu eu curabitur tellus turpis, quia quam. Mauris morbi nec, ultrices ornare, elit egestas ut euismod orci adipiscing, velit ligula mi, velit etiam aliquam quis</p>
          </section>
          <section id='link-here' className='section'>
            <p>This is link-here. Diam nullam diam id nostra lectus, nulla dapibus. Scelerisque felis quisque et ipsum feugiat, sollicitudin ullamcorper lacus egestas est accumsan, at blanditiis mi, semper ligula. Est eu eu curabitur tellus turpis, quia
                quam. Mauris morbi nec, ultrices ornare, elit egestas ut euismod orci adipiscing, velit ligula mi, velit etiam aliquam quis commodo. Turpis sit tortor ornare wisi. Rhoncus dolor, vitae doloremque purus aliquet felis nec, nunc ullamcorper,
                vel dictum placerat lacinia urna eget pharetra, egestas a sit ipsum lacus cum arcu. Elementum sed ligula eget, non nullam vestibulum nisl sem, lectus parturient, pellentesque tortor massa convallis fermentum ligula. </p>
            <p>Diam nullam diam id nostra lectus, nulla dapibus. Scelerisque felis quisque et ipsum feugiat, sollicitudin ullamcorper lacus egestas est accumsan, at blanditiis mi, semper ligula. Est eu eu curabitur tellus turpis, quia quam. Mauris morbi
                nec, ultrices ornare, elit egestas ut euismod orci adipiscing, velit ligula mi, velit etiam aliquam quis commodo. Turpis sit tortor ornare wisi. Rhoncus dolor, vitae doloremque purus aliquet felis nec, nunc ullamcorper, vel dictum placerat
                lacinia urna eget pharetra, egestas a sit ipsum lacus cum arcu. Elementum sed ligula eget, non nullam vestibulum nisl sem, lectus parturient, pellentesque tortor massa convallis fermentum ligula. </p>
            <p>Diam nullam diam id nostra lectus, nulla dapibus. Scelerisque felis quisque et ipsum feugiat, sollicitudin ullamcorper lacus egestas est accumsan, at blanditiis mi, semper ligula. Est eu eu curabitur tellus turpis, quia quam. Mauris morbi
                nec, ultrices ornare, elit egestas ut euismod orci adipiscing, velit ligula mi, velit etiam aliquam quis commodo. Turpis sit tortor ornare wisi. Rhoncus dolor, vitae doloremque purus aliquet felis nec, nunc ullamcorper, vel dictum placerat
                lacinia urna eget pharetra, egestas a sit ipsum lacus cum arcu. Elementum sed ligula eget, non nullam vestibulum nisl sem, lectus parturient, pellentesque tortor massa convallis fermentum ligula. </p>
            <p>Diam nullam diam id nostra lectus, nulla dapibus. Scelerisque felis quisque et ipsum feugiat, sollicitudin ullamcorper lacus egestas est accumsan, at blanditiis mi, semper ligula. Est eu eu curabitur tellus turpis, quia quam. Mauris morbi
                nec, ultrices ornare, elit egestas ut euismod orci adipiscing, velit ligula mi, velit etiam aliquam quis commodo. Turpis sit tortor ornare wisi. Rhoncus dolor, vitae doloremque purus aliquet felis nec, nunc ullamcorper, vel dictum placerat
                lacinia urna eget pharetra, egestas a sit ipsum lacus cum arcu. Elementum sed ligula eget, non nullam vestibulum nisl sem, lectus parturient, pellentesque tortor massa convallis fermentum ligula. </p>
          </section>
          <section className='section'>
            <p>massa nonummy sit interdum eget, nec nunc pellentesque wisi mauris wisi eget. Turpis accusamus ultrices rutrum tempor lorem, rutrum dis leo aenean volutpat proin. Diam nullam diam id nostra lectus, nulla dapibus. Scelerisque felis quisque
                et ipsum feugiat, sollicitudin ullamcorper lacus egestas est accumsan, at blanditiis mi, semper ligula. Est eu eu curabitur tellus turpis, quia quam. Mauris morbi nec, ultrices ornare, elit egestas ut euismod orci adipiscing, velit ligula
                mi, velit etiam aliquam quis commodo. </p>
            <p>massa nonummy sit interdum eget, nec nunc pellentesque wisi mauris wisi eget. Turpis accusamus ultrices rutrum tempor lorem, rutrum dis leo aenean volutpat proin. Diam nullam diam id nostra lectus, nulla dapibus. Scelerisque felis quisque
                et ipsum feugiat, sollicitudin ullamcorper lacus egestas est accumsan, at blanditiis mi, semper ligula. Est eu eu curabitur tellus turpis, quia quam. Mauris morbi nec, ultrices ornare, elit egestas ut euismod orci adipiscing, velit ligula
                mi, velit etiam aliquam quis commodo. </p>
            <p>massa nonummy sit interdum eget, nec nunc pellentesque wisi mauris wisi eget. Turpis accusamus ultrices rutrum tempor lorem, rutrum dis leo aenean volutpat proin. Diam nullam diam id nostra lectus, nulla dapibus. Scelerisque felis quisque
                et ipsum feugiat, sollicitudin ullamcorper lacus egestas est accumsan, at blanditiis mi, semper ligula. Est eu eu curabitur tellus turpis, quia quam. Mauris morbi nec, ultrices ornare, elit egestas ut euismod orci adipiscing, velit ligula
                mi, velit etiam aliquam quis commodo. </p>
            <p>massa nonummy sit interdum eget, nec nunc pellentesque wisi mauris wisi eget. Turpis accusamus ultrices rutrum tempor lorem, rutrum dis leo aenean volutpat proin. Diam nullam diam id nostra lectus, nulla dapibus. Scelerisque felis quisque
                et ipsum feugiat, sollicitudin ullamcorper lacus egestas est accumsan, at blanditiis mi, semper ligula. Est eu eu curabitur tellus turpis, quia quam. Mauris morbi nec, ultrices ornare, elit egestas ut euismod orci adipiscing, velit ligula
                mi, velit etiam aliquam quis commodo. </p>
          </section>
          <section className='section'>
            <p>massa nonummy sit interdum eget, nec nunc pellentesque wisi mauris wisi eget. Turpis accusamus ultrices rutrum tempor lorem, rutrum dis leo aenean volutpat proin. Diam nullam diam id nostra lectus, nulla dapibus. Scelerisque felis quisque
                et ipsum feugiat, sollicitudin ullamcorper lacus egestas est accumsan, at blanditiis mi, semper ligula. Est eu eu curabitur tellus turpis, quia quam. Mauris morbi nec, ultrices ornare, elit egestas ut euismod orci adipiscing, velit ligula
                mi, velit etiam aliquam quis commodo. </p>
            <p>massa nonummy sit interdum eget, nec nunc pellentesque wisi mauris wisi eget. Turpis accusamus ultrices rutrum tempor lorem, rutrum dis leo aenean volutpat proin. Diam nullam diam id nostra lectus, nulla dapibus. Scelerisque felis quisque
                et ipsum feugiat, sollicitudin ullamcorper lacus egestas est accumsan, at blanditiis mi, semper ligula. Est eu eu curabitur tellus turpis, quia quam. Mauris morbi nec, ultrices ornare, elit egestas ut euismod orci adipiscing, velit ligula
                mi, velit etiam aliquam quis commodo. </p>
            <p>massa nonummy sit interdum eget, nec nunc pellentesque wisi mauris wisi eget. Turpis accusamus ultrices rutrum tempor lorem, rutrum dis leo aenean volutpat proin. Diam nullam diam id nostra lectus, nulla dapibus. Scelerisque felis quisque
                et ipsum feugiat, sollicitudin ullamcorper lacus egestas est accumsan, at blanditiis mi, semper ligula. Est eu eu curabitur tellus turpis, quia quam. Mauris morbi nec, ultrices ornare, elit egestas ut euismod orci adipiscing, velit ligula
                mi, velit etiam aliquam quis commodo. </p>
            <p>massa nonummy sit interdum eget, nec nunc pellentesque wisi mauris wisi eget. Turpis accusamus ultrices rutrum tempor lorem, rutrum dis leo aenean volutpat proin. Diam nullam diam id nostra lectus, nulla dapibus. Scelerisque felis quisque
                et ipsum feugiat, sollicitudin ullamcorper lacus egestas est accumsan, at blanditiis mi, semper ligula. Est eu eu curabitur tellus turpis, quia quam. Mauris morbi nec, ultrices ornare, elit egestas ut euismod orci adipiscing, velit ligula
                mi, velit etiam aliquam quis commodo. </p>
          </section>
          <section className='section'>
            <p>massa nonummy sit interdum eget, nec nunc pellentesque wisi mauris wisi eget. Turpis accusamus ultrices rutrum tempor lorem, rutrum dis leo aenean volutpat proin. Diam nullam diam id nostra lectus, nulla dapibus. Scelerisque felis quisque
                et ipsum feugiat, sollicitudin ullamcorper lacus egestas est accumsan, at blanditiis mi, semper ligula. Est eu eu curabitur tellus turpis, quia quam. Mauris morbi nec, ultrices ornare, elit egestas ut euismod orci adipiscing, velit ligula
                mi, velit etiam aliquam quis commodo. </p>
            <p>massa nonummy sit interdum eget, nec nunc pellentesque wisi mauris wisi eget. Turpis accusamus ultrices rutrum tempor lorem, rutrum dis leo aenean volutpat proin. Diam nullam diam id nostra lectus, nulla dapibus. Scelerisque felis quisque
                et ipsum feugiat, sollicitudin ullamcorper lacus egestas est accumsan, at blanditiis mi, semper ligula. Est eu eu curabitur tellus turpis, quia quam. Mauris morbi nec, ultrices ornare, elit egestas ut euismod orci adipiscing, velit ligula
                mi, velit etiam aliquam quis commodo. </p>
            <p>massa nonummy sit interdum eget, nec nunc pellentesque wisi mauris wisi eget. Turpis accusamus ultrices rutrum tempor lorem, rutrum dis leo aenean volutpat proin. Diam nullam diam id nostra lectus, nulla dapibus. Scelerisque felis quisque
                et ipsum feugiat, sollicitudin ullamcorper lacus egestas est accumsan, at blanditiis mi, semper ligula. Est eu eu curabitur tellus turpis, quia quam. Mauris morbi nec, ultrices ornare, elit egestas ut euismod orci adipiscing, velit ligula
                mi, velit etiam aliquam quis commodo. </p>
            <p>massa nonummy sit interdum eget, nec nunc pellentesque wisi mauris wisi eget. Turpis accusamus ultrices rutrum tempor lorem, rutrum dis leo aenean volutpat proin. Diam nullam diam id nostra lectus, nulla dapibus. Scelerisque felis quisque
                et ipsum feugiat, sollicitudin ullamcorper lacus egestas est accumsan, at blanditiis mi, semper ligula. Est eu eu curabitur tellus turpis, quia quam. Mauris morbi nec, ultrices ornare, elit egestas ut euismod orci adipiscing, velit ligula
                mi, velit etiam aliquam quis commodo. </p>
          </section>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
