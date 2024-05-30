import { TypeAnimation } from 'react-type-animation';
import React from 'react';

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        "In the heart of every great endeavor lies a humble beginning, and for Serenn Bakes, it all began with a simple act of friendship. Seven years ago, she took her first leap of faith, crafting a cake for a friend. Little did she know, that sweet gesture would ignite a passion that would flourish into something extraordinary.From those initial orders, just one or two, Serenn Bakes has blossomed into a beloved small business within the cozy circle of family and friends. Yet, its reach extends far beyond, capturing the hearts of many with its hallmark traits: purity, trustworthiness, and homely charm. But perhaps most enchanting of all is the rich taste that lingers on the palate, promising an experience that transcends the ordinary.At Serenn Bakes, the mission is simple yet profound: to blend the time-honored traditions of baking with innovative and creative flair. From decadent cakes to indulgent muffins and whimsical cupcakes, each delicacy is crafted with care and precision, ensuring a taste sensation that lasts a lifetime.Step into the world of Serenn Bakes, where every bite tells a story of passion, dedication, and the pursuit of culinary perfection. Here, dreams are baked into reality, and every confection is a testament to the artistry of a woman who dared to follow her heart.",
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={1}
      style={{ fontSize: '1.5em', display: 'inline-block' }}
    />
  );
};

export default ExampleComponent;
