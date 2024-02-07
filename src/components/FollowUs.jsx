import React from 'react'
import styles, { layout } from "../style";
import './Styles/followUs.css'
import { logo } from "../assets";




const FollowUs = () => (
    <section id="FollowUs" className="h-full">
    <div className="text-white text-center mb-12">
      <h2 className="text-5xl font-bold">Follow Our Journey!</h2>
    </div>
    <div className="flex justify-center">
      <div className="w-1/5  h-auto mx-2"><div class="tooltip-container">
  <div class="tooltip">
    <div class="profile">
      <div class="user">
        <div class="img">IV</div>
        <div class="details">
          <div class="name">Invova</div>
          <div class="username">@invovaIT</div>
        </div>
      </div>
      <div class="about">500+ Connections</div>
    </div>
  </div>
  <div class="text">
    <a class="icon" href="https://freecodez.com/">
      <div class="layer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="linkedin"><g fill="#1976D2"><path d="M0 5h3.578v11H0zM13.324 5.129c-.038-.012-.074-.025-.114-.036a2.32 2.32 0 0 0-.145-.028A3.207 3.207 0 0 0 12.423 5c-2.086 0-3.409 1.517-3.845 2.103V5H5v11h3.578v-6s2.704-3.766 3.845-1v7H16V8.577a3.568 3.568 0 0 0-2.676-3.448z"></path><circle cx="1.75" cy="1.75" r="1.75"></circle></g></svg>
      </div>
      <div class="text">LinkedIn</div>
    </a>
  </div>
</div>
</div>
<div className="w-1/5  h-auto mx-2"><div class="tooltip-container">
  <div class="tooltip">
    <div class="profile">
      <div class="user">
        <div class="img">IV</div>
        <div class="details">
          <div class="name">Invova</div>
          <div class="username">@Invova</div>
        </div>
      </div>
      <div class="about">500+ Friends</div>
    </div>
  </div>
  <div class="text">
    <a class="icon" href="#">
      <div class="layer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="upwork"><path fill="#1976D2" d="M18.561,5.025c-2.539,0-4.51,1.647-5.31,4.362c-1.22-1.832-2.148-4.032-2.687-5.886H7.828v7.105c-0.002,1.404-1.141,2.543-2.547,2.545c-1.406-0.002-2.543-1.142-2.545-2.545V3.5H0v7.105c0,2.911,2.371,5.298,5.282,5.298c2.913,0,5.283-2.387,5.283-5.298V9.416c0.529,1.106,1.182,2.228,1.974,3.219L10.865,20.5h2.797l1.213-5.705c1.063,0.679,2.285,1.109,3.686,1.109c3,0,5.439-2.45,5.439-5.445C24,7.461,21.561,5.025,18.561,5.025L18.561,5.025z M18.561,13.157c-1.102,0-2.135-0.467-3.074-1.227l0.228-1.074l0.008-0.042c0.207-1.143,0.849-3.058,2.839-3.058c1.492,0,2.703,1.211,2.703,2.7C21.264,11.945,20.053,13.157,18.561,13.157L18.561,13.157z"></path><path fill="#1976D2" d="M12,15.165L10.865,20.5H12V15.165L12,15.165z M10.564,3.5H7.828v7.105c-0.002,1.404-1.141,2.543-2.547,2.545c-1.406-0.002-2.543-1.142-2.545-2.545V3.5H0v7.105c0,2.911,2.371,5.298,5.282,5.298c2.913,0,5.283-2.387,5.283-5.298V9.416c0.404,0.845,0.88,1.699,1.436,2.497V7.194C11.386,5.943,10.9,4.655,10.564,3.5L10.564,3.5z"></path></svg>      </div>
      <div class="text">Upwork</div>
    </a>
  </div>
</div></div>
<div className="w-1/5  h-auto mx-2"><div class="tooltip-container">
  <div class="tooltip">
    <div class="profile">
      <div class="user">
        <div class="img">IV</div>
        <div class="details">
          <div class="name">Invova</div>
          <div class="username">@Invova</div>
        </div>
      </div>
      <div class="about">500+ Friends</div>
    </div>
  </div>
  <div class="text">
    <a class="icon" href="#">
      <div class="layer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github"><path fill="#1976D2" d="M10.07031,20.50291a1.00008,1.00008,0,0,0-1.18115-.9834c-1.30908.24024-2.96191.27637-3.40137-.958a5.70754,5.70754,0,0,0-1.83691-2.415,1.20073,1.20073,0,0,1-.1665-.10938,1,1,0,0,0-.93067-.64551H2.54883a.99965.99965,0,0,0-1,.99512c-.00391.81543.811,1.33789,1.1416,1.51465a4.4408,4.4408,0,0,1,.92383,1.35937c.36426,1.02344,1.42285,2.57617,4.46582,2.376.001.03516.00195.06836.00244.09863l.00439.26758a1,1,0,0,0,2,0l-.00488-.31836C10.07715,21.4951,10.07031,21.22068,10.07031,20.50291Zm10.667-15.126c.03174-.125.063-.26367.09034-.41992a6.27792,6.27792,0,0,0-.40821-3.293,1.002,1.002,0,0,0-.61572-.58007c-.356-.12012-1.67041-.35645-4.18408,1.25a13.86918,13.86918,0,0,0-6.354,0C6.76221.751,5.45459.9658,5.10205,1.07908a.99744.99744,0,0,0-.63135.584,6.3003,6.3003,0,0,0-.40332,3.35644c.02442.12793.05078.2461.07813.35449A6.26928,6.26928,0,0,0,2.89014,9.20311a8.42168,8.42168,0,0,0,.04248.92187c.334,4.60254,3.334,5.98438,5.42431,6.459-.04345.125-.083.25878-.11816.40039a1.00023,1.00023,0,0,0,1.94238.47851,1.6784,1.6784,0,0,1,.46778-.87793.99947.99947,0,0,0-.5459-1.74512c-3.4541-.39453-4.95362-1.80175-5.1792-4.89843a6.61076,6.61076,0,0,1-.03369-.73828,4.25769,4.25769,0,0,1,.91943-2.71289,3.022,3.022,0,0,1,.1958-.23145.99988.99988,0,0,0,.188-1.02441,3.3876,3.3876,0,0,1-.15527-.55567A4.09356,4.09356,0,0,1,6.1167,3.06346a7.54263,7.54263,0,0,1,2.415,1.17968,1.00877,1.00877,0,0,0,.82764.13282,11.77716,11.77716,0,0,1,6.17285.001,1.00549,1.00549,0,0,0,.83056-.13769,7.572,7.572,0,0,1,2.40528-1.19043,4.03977,4.03977,0,0,1,.0874,1.57812,3.205,3.205,0,0,1-.16895.60743.9999.9999,0,0,0,.188,1.02441c.07715.08691.1543.18066.22363.26855A4.12186,4.12186,0,0,1,20,9.20311a7.03888,7.03888,0,0,1-.0376.77734c-.22021,3.05566-1.72558,4.46387-5.1958,4.85937a1,1,0,0,0-.54541,1.7461,1.63079,1.63079,0,0,1,.46631.9082,3.06079,3.06079,0,0,1,.09229.81934v2.334C14.77,21.2949,14.77,21.78025,14.77,22.00291a1,1,0,1,0,2,0c0-.2168,0-.69238.00977-1.33984V18.31346a4.8815,4.8815,0,0,0-.15479-1.31153,4.25638,4.25638,0,0,0-.11621-.416,6.51258,6.51258,0,0,0,5.44531-6.42383A8.69677,8.69677,0,0,0,22,9.20311,6.13062,6.13062,0,0,0,20.7373,5.37693Z"></path></svg>      
</div><div class="text">Github</div>
    </a>
  </div>
</div></div>
      <div className="w-1/5  h-auto mx-2"><div class="tooltip-container">
  <div class="tooltip">
    <div class="profile">
      <div class="user">
        <div class="img">IV</div>
        <div class="details">
          <div class="name">Invova</div>
          <div class="username">@Invova</div>
        </div>
      </div>
      <div class="about">500+ Friends</div>
    </div>
  </div>
  <div class="text">
    <a class="icon" href="#">
      <div class="layer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="facebook"><path fill="#1976D2" fill-rule="evenodd" d="M12 5.5H9v-2a1 1 0 0 1 1-1h1V0H9a3 3 0 0 0-3 3v2.5H4V8h2v8h3V8h2l1-2.5z" clip-rule="evenodd"></path></svg>
      </div>
      <div class="text">Facebook</div>
    </a>
  </div>
</div></div>
      <div className="w-1/5 h-auto mx-2"><div class="tooltip-container">
  <div class="tooltip">
    <div class="profile">
      <div class="user">
        <div class="img">IV</div>
        <div class="details">
          <div class="name">Invova</div>
          <div class="username">@Invova</div>
        </div>
      </div>
      <div class="about">800+ Followers</div>
    </div>
  </div>
  <div class="text">
    <a class="icon" href="#">
      <div class="layer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" id="instagram"><path fill="#1976D2" fill-rule="evenodd" d="M22 3H10c-3.86 0-7 3.14-7 7v12c0 3.86 3.14 7 7 7h12c3.86 0 7-3.14 7-7V10c0-3.86-3.14-7-7-7zm5 19c0 2.757-2.243 5-5 5H10c-2.757 0-5-2.243-5-5V10c0-2.757 2.243-5 5-5h12c2.757 0 5 2.243 5 5v12zM16 10c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm8-10.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 24 9.5z"></path></svg>      </div>
      <div class="text">Instagram</div>
    </a>
  </div>
</div>
</div>
    </div>

   

  </section>

  );


export default FollowUs