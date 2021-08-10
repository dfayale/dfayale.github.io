import { React } from 'react'

export const Footer = () => {
  return (
    <footer class="bg-blue">
      <div class="container pt-4 pb-5">
        <div class="float-right">
          <a href="mailto:yale@designformamerica.com">
            <i class="fa fa-envelope fa-2x footer mx-2"></i>
          </a>
          <a href="https://www.facebook.com/DfaYale/">
            <i class="fab fa-facebook fa-2x footer mx-2"></i>
          </a>
        </div>
        <h5 class="footer">Design for America at Yale</h5>
        <small class="footer">
          <a href="/attribution"> Icon Attribution</a>
          <br />
          Site designed by Elizabeth Brooks, Lance Tan, Linna Yao, and
          Christopher Nathan
        </small>
      </div>
    </footer>
  )
}
