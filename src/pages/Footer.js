import { React } from 'react'

export const Footer = () => {
  return (
    <footer class="bg-pink">
      <div class="container pt-4 pb-5">
        <div class="float-right">
          <a href="mailto:yale@designformamerica.com">
            <i class="fa fa-envelope fa-2x text-dark mx-2"></i>
          </a>
          <a href="https://www.facebook.com/DfaYale/">
            <i class="fab fa-facebook fa-2x text-dark mx-2"></i>
          </a>
        </div>
        <h5 class="text-dark">Design for America at Yale</h5>
        <small>
          Site designed by Elizabeth Brooks, Lance Tan, Linna Yao, and
          Christopher Nathan
        </small>
      </div>
    </footer>
  )
}
