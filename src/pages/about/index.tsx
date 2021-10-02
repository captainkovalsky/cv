import styles from "./about.module.scss";

console.log("styles", styles);
export default function AboutPage() {
  return (
    <>
      <h1>Hello</h1>
      <article className={styles.root}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisi
          metus, aliquet pulvinar odio at, consequat blandit velit. Vivamus
          elementum ultricies elit. Cras vitae rhoncus orci. Praesent quis
          turpis imperdiet, tempor tellus id, bibendum nisl. Donec magna quam,
          vehicula vitae suscipit ac, iaculis in risus. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Quisque sit amet egestas felis. Maecenas metus turpis,
          gravida sed diam sit amet, tempus auctor eros. Fusce sem augue,
          faucibus eu nulla nec, egestas sollicitudin velit. Ut sodales, magna
          vestibulum accumsan mattis, justo magna ultricies nisi, quis consequat
          tellus tortor posuere nibh. Etiam id velit sed nisi tristique
          bibendum. Curabitur non ipsum luctus, rhoncus mauris vitae, aliquet
          orci. Phasellus id efficitur ligula, a euismod turpis. Fusce sagittis
          metus maximus enim lobortis interdum. Etiam lorem magna, tempus sed
          aliquet varius, convallis sed ante. Aliquam pellentesque augue sem, id
          posuere turpis eleifend id.
        </p>

        <p>
          Cras sapien massa, elementum id elit at, lacinia interdum justo. Fusce
          fermentum turpis vitae enim suscipit, sed venenatis est efficitur.
          Aliquam cursus sem et enim gravida pharetra. Ut augue dolor, cursus
          quis cursus a, venenatis sed mauris. Sed rutrum a metus vitae commodo.
          Vivamus at condimentum est. Cras in augue orci. Ut commodo justo sed
          dolor tempor molestie. Pellentesque habitant morbi tristique senectus
          et netus et malesuada fames ac turpis egestas. In molestie pulvinar
          urna a maximus.
        </p>

        <p>
          Maecenas sodales, nulla vitae pulvinar rhoncus, elit risus tempus
          libero, at iaculis eros tortor elementum lacus. Pellentesque laoreet
          neque ligula, at eleifend ligula tristique id. Nulla a fringilla leo.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
          aliquet urna, malesuada ultricies dui. Proin eget enim sit amet purus
          egestas ullamcorper in sed quam. Nullam sit amet nisi venenatis,
          aliquam leo sed, dignissim nibh. In non dolor ac est varius pretium.
          Curabitur ac mauris sed nisl ornare fringilla. Sed urna mi, hendrerit
          eget vulputate et, convallis quis ex. Proin bibendum eget ligula
          varius aliquam. Proin sagittis accumsan dolor sagittis varius.
          Phasellus et egestas eros.
        </p>

        <p>
          Vestibulum fringilla tortor diam, et tincidunt est ultrices a. Sed sed
          fermentum justo, in facilisis tellus. Nulla tincidunt tellus felis, et
          interdum nisi dictum sit amet. Nunc finibus tristique mi vel rutrum.
          Curabitur lacinia ornare sem nec euismod. Sed bibendum quam quis
          turpis ornare gravida. Donec lorem tortor, rhoncus sit amet euismod
          vel, porttitor a neque. Suspendisse magna lectus, consectetur
          scelerisque interdum et, consectetur sed nulla. Nunc vel pellentesque
          metus, sed pharetra quam. Ut egestas dapibus turpis quis commodo.
          Nulla sed semper ligula.
        </p>

        <p>
          Cras id ipsum tincidunt arcu tristique ullamcorper. Mauris
          sollicitudin augue sed ex tincidunt, ut pellentesque felis aliquam.
          Nunc venenatis vestibulum augue ac scelerisque. Nulla ac tellus id leo
          fringilla lacinia. Vivamus ut magna a metus feugiat rhoncus a quis
          ligula. Pellentesque eleifend varius nisl eu ullamcorper. Sed sodales
          ultricies lorem ac convallis.
        </p>
      </article>
    </>
  );
}
