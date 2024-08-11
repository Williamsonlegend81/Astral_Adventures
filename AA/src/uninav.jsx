import React from 'react'
import './uni.css'
import { COLOR } from 'rsuite/esm/internals/constants'


const uninav = () => {





  return (
    <div>
      {/* Welcome to home */}


      {/* Navbar */}
      <div class="navbar1">
        <img src="image/logo.png" alt="" />

        <a href="#pla">Planets</a>
        <a href="#Exo">Exoplanets</a>
        <a href="#Flying">Flying Objects</a>
        <a href="#Galaxy1">Galaxy</a>
        <a href="#Stars">Stars</a>
      </div>


      <div id="pla">
        <h1>PLANETS</h1>
        <p>Each Planet has its own story to tell, hidden in the depths of space.</p>
        <div className="planets">
          <div className="box">
            <img src="../public/Planet Picture/Mercury_in_true_color-removebg-preview.png" alt="Mercury" />
            <h2>Mercury</h2>
            <p>Mercury is the smallest and fastest planet, zipping around the Sun in just 88 days! It's full of craters, just like our Moon, and has extreme temperatures—super hot during the day and freezing cold at night. If you were on Mercury, you could see the Sun rise, set, and rise again all in one day!
            </p>

          </div>
          <div className="box">
            <img src="../public/Planet Picture/Venuse-removebg-preview.png" alt="Mercury" />
            <h2>Venus</h2>
            <p>Venus is Earth’s "sister" because they’re about the same size, but Venus is way hotter—hot enough to melt lead! It’s covered in thick clouds of poisonous gas that trap heat, making it the hottest planet. On Venus, a day is longer than a year, and the planet spins backward, so the Sun rises in the west and sets in the east!
            </p>

          </div>
          <div className="box">
            <img src="../public/Planet Picture/earth-blue-planet-globe-planet-87651-removebg-preview.png" alt="Mercury" />
            <h2>Earth</h2>
            <p>Earth is our home, and it’s just the right place for life to thrive! It has water, air, and a perfect distance from the Sun to keep us warm but not too hot. Earth is the only planet we know with oceans, forests, and amazing animals, including us!
            </p>

          </div>
          <div className="box">
            <img src="../public/Planet Picture/Mars-removebg-preview.png" alt="Mercury" />
            <h2>Mars</h2>
            <p>Mars, the Red Planet, is known for its rusty red color, giant volcanoes, and massive dust storms. It’s a cold desert world, but scientists think there might have been water on Mars long ago, and they’re still searching for signs of ancient life!</p>

          </div>
          <div className="box">
            <img src="../public/Planet Picture/images-removebg-preview (1).png" alt="Mercury" />
            <h2>Jupiter</h2>
            <p>Mars, the Red Planet, is known for its rusty red color, giant volcanoes, and massive dust storms. It’s a cold desert world, but scientists think there might have been water on Mars long ago, and they’re still searching for signs of ancient life!</p>

          </div>
          <div className="box">
            <img className='sa' src="../public/Planet Picture/Saturen-removebg-preview.png" alt="Mercury" />
            <h2>Saturn</h2>
            <p>Saturn is famous for its stunning rings made of ice and rock. It’s a gas giant, like Jupiter, and is so light that it could float in water—if you could find a bathtub big enough! Saturn has more than 80 moons, including Titan, which has lakes of liquid methane!
            </p>

          </div>
          <div className="box">
            <img src="../public/Planet Picture/Urenes-removebg-preview.png" alt="Mercury" />
            <h2>Uranus</h2>
            <p>Uranus is a bit of a weirdo in our solar system—it spins on its side! It’s a cold, icy giant with faint rings and a blue-green color because of methane gas in its atmosphere. Uranus takes a super long time to go around the Sun—84 Earth years for just one trip!</p>

          </div>
          <div className="box">
            <img src="../public/Planet Picture/neptune-removebg-preview.png" alt="Mercury" />
            <h2>Neptune</h2>
            <p>Neptune is the windiest planet, with wild storms and supersonic winds that blow faster than the speed of sound! It’s a deep blue color and is far, far away from the Sun, making it a very cold place. Neptune has 14 moons and even has faint rings, like Saturn.
            </p>

          </div>
        </div>
      </div>


      <div id="Exo">
        <h1>EXOPLANET</h1>

        <h3 >What is an exoplanet?</h3>
        <p>Exoplanets are planets that orbit stars far beyond our solar system, and there are billions of them out there! Some exoplanets are gigantic gas giants, even bigger than Jupiter, while others are small, rocky worlds like Earth. These distant planets can be really wild—imagine a planet where it rains glass sideways because of super-fast winds, or another where the ground is covered in boiling lava! Scientists have also found planets made almost entirely of diamond—talk about a shiny world! Some exoplanets even orbit two stars at once, which means if you lived there, you’d get to see double sunrises and sunsets every day! Scientists are always discovering new exoplanets, and they’re especially excited to find ones in the "habitable zone," where conditions might be just right for life. Who knows, maybe one day we’ll find a planet with alien life or even a place where humans could live! The universe is full of surprises, and exoplanets are some of the coolest mysteries out there! Few Examples:
        </p>

        <div className="exp">
          <p><b>1. Kepler-186f :</b> An Earth-sized planet in the habitable zone, possibly having conditions for liquid water. <br />
            <b>2. HD 189733b :</b> A planet with sideways glass rain due to super-fast winds. <br />
            <b>3. 55 Cancri e :</b>  A super-Earth possibly made mostly of diamond.   <br />
            <b>4. TRAPPIST-1d :</b>  One of seven Earth-sized planets in a star system, with potential for water.  <br />
            <b>5. WASP-12b :</b>  A hot, egg-shaped gas giant being stretched by its star’s gravity.  <br />
            <b>6. Gliese 581c :</b>  An Earth-like planet in the habitable zone but closer to its star, possibly like Venus.  <br />
          </p>
          <img  id="Photo"src="../public/image/maxresdefault.jpg" alt="" />
         
        </div>
      </div>


      <div id="Flying">
        <h1>FLYING OBJECTS</h1>
        <div className="obj">
      <p>
      Asteroids, comets, and meteors each play a unique role in our solar system, and understanding their differences can be fascinating.   <br />
      <b> Asteroids</b> are like the "rocky leftovers" from the early days of our solar system. These large, irregularly shaped bodies mostly orbit the Sun in the asteroid belt between Mars and Jupiter. They are made mostly of rock and metal and can vary greatly in size, from small boulders to objects hundreds of kilometers across.   <br />
<b> Comets</b>, on the other hand, are often described as cosmic snowballs. They originate from the outer reaches of the solar system, such as the Kuiper Belt and Oort Cloud, and are made of ice, dust, and rocky material. When comets venture close to the Sun, they heat up, causing their icy nucleus to release gas and dust, which forms a glowing coma and a spectacular tail that always points away from the Sun. This makes comets the solar system's glittery visitors.   <br />
<b> Meteors</b> are the visible streaks of light we see in the sky, known as "shooting stars," when tiny space rocks called meteoroids enter Earth's atmosphere and burn up due to intense friction. If these meteoroids survive the fiery journey through the atmosphere and land on Earth, they become meteorites. So, while asteroids are big rocky bodies, comets are icy objects with brilliant tails, and meteors are the bright streaks created by smaller fragments burning up in our atmosphere. Each of these celestial objects adds its own unique sparkle to the cosmic dance of our solar system!
</p>
<img id="Photo"src="../public/image/downlo.jpg" alt="" />
</div>
</div>
        

    <div id="Galaxy1">

      <h1>GALAXY</h1>
      <h3>What is the Galaxy?</h3>
      <div id="Galaxy">
      <p>
      Galaxies are vast collections of stars, gas, dust, and dark matter bound together by gravity, and they come in various fascinating shapes and sizes.  <br />
      <b>piral galaxies </b> are like the classic "pinwheel" shape, with a central bulge surrounded by swirling arms of stars and nebulae, resembling a spiral staircase. Our own Milky Way galaxy is a spiral galaxy, with its majestic arms stretching out in a grand spiral pattern.   <br />
     <b> Elliptical galaxies </b>Sare more rounded and smooth, lacking the distinct arms of spirals. They range from nearly spherical to more elongated shapes and are composed mostly of older stars with little new star formation.  <br />
     <b>Irregular galaxies</b> don't have a regular shape and often look like chaotic clouds of stars and gas. They can be the result of galactic collisions Sor gravitational interactions, giving them a more uneven and patchy appearance.  <br />
     <b>Dwarf galaxies</b> are much smaller and can be found orbiting larger galaxies. Despite their size, they still contain millions of stars and can have a significant impact on their larger neighbors. Each type of galaxy contributes to the incredible diversity and complexity of the universe, showcasing the endless variety of cosmic structures that exist beyond our own Milky Way.  <br />
      </p>
      <img id='Photo'src="../public/image/Galaxy.jpg" alt="" />
    </div>
    </div>
   


      <div id="Stars">

        <h1>STARS</h1>

        <div className="st">
          <p>
        Stars are the dazzling, glowing powerhouses of the universe, each with its own unique characteristics.  <br />
      <b>  Red dwarfs</b> are the most common type of star, small and cool with a reddish hue, and they burn their fuel very slowly, making them long-lived. <br />
        <b>Yellow dwarfs</b>, like our Sun, are medium-sized stars with a yellowish light and moderate temperatures. They have a stable lifespan and are essential for life on Earth. <br />
        <b>Blue giants</b> are much larger and hotter, radiating a bright blue light. They burn through their fuel quickly and have relatively short lifespans compared to smaller stars. <br />
       <b>Red giants</b> are stars that have exhausted their core hydrogen and expanded into massive, cooler stars with a reddish glow. They eventually shed their outer layers, leaving behind a dense core. <br /> 
       <b> Neutron stars </b>are the remnants of supernova explosions, incredibly dense and small, with masses greater than the Sun packed into a sphere only about 10 miles (16 kilometers) across. <br />
       <b>Black holes </b> are the mysterious end stages of massive stars, where gravity is so strong that not even light can escape from them. Each type of star has its own life cycle and plays a crucial role in the cosmic ecosystem, contributing to the dynamic and ever-changing nature of the universe.
       </p>
        
        <div className="p">
       <img id="Photo" src="../public/image/Star.jpg" alt="" />
       <h2>Stars</h2>
       </div>
       </div>
      </div>
    </div>
  )
}

export default uninav
