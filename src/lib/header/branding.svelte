<div class="branding">
    <span class="code">&lt;&#47;</span>m<span class="optional">a</span>tt<span class="optional">&nbsp;</span>w<span class="optional">i</span>ls<span class="optional">o</span>n<span class="code">&gt;</span>
</div>

<style lang="scss">

.branding {
  
  animation: fadeIn linear 1s;
  font-size: 1.5em;
  font-weight: 800;
  letter-spacing: .1em;
  padding: 1em;
  
  .code {
    color: #EB7D3F;
    font-weight: 800;
    filter: blur(0em);
    transition: filter 0.5s;
  }
  
  .optional {
    display: inline-block;
    transform: scaleX(0);
    position: absolute;
  }
  
  &:hover {
    .optional {
      position: static;
      transform: scaleX(1);
      transition: transform 0.2s;
    }
    
    .code {
      filter: blur(.075em);
      transition: filter 0.2s;
    }
  }
}

</style>