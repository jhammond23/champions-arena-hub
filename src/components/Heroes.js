// Heroes.js

import alenia from './media/NFTheroes/alenia.gif';
import feraella from './media/NFTheroes/feraella.webp';
import saphir from './media/NFTheroes/saphir.gif';
import vera from './media/NFTheroes/vera.gif';
import barbara from './media/NFTheroes/barbara.gif';
import richter from './media/NFTheroes/richter.gif';
import veronika from './media/NFTheroes/veronika.webp';
import desdemona from './media/NFTheroes/desdemona.gif';
import varnas from './media/NFTheroes/varnas.gif';
import kage from './media/NFTheroes/kage.gif';
import kristoph from './media/NFTheroes/kristoph.gif';
import violet from './media/NFTheroes/violet.gif';
import dimentianus from './media/NFTheroes/dimentianus.gif';
import deviStan from './media/NFTheroes/devi&stan.gif';
import magnus from './media/NFTheroes/magnus.gif';
import lena from './media/NFTheroes/lena.gif';
import adan from './media/NFTheroes/adan.gif';
import seraph from './media/NFTheroes/seraph.gif';
import sophia from './media/NFTheroes/sophia.gif';
import beckett from './media/NFTheroes/beckett.gif';
import nina from './media/NFTheroes/nina.gif';
import ripple from './media/NFTheroes/ripple.gif';
import roxane from './media/NFTheroes/roxane.gif';
import deborah from './media/NFTheroes/deborah.gif';
import yeonhwa from './media/NFTheroes/yeonhwa.gif';
import quixote from './media/NFTheroes/quixote.gif';
import xiaoyu from './media/NFTheroes/xiaoyu.gif';
import trixie from './media/NFTheroes/trixie.gif';
import sakaris from './media/NFTheroes/sakaris.gif';
import jacob from './media/NFTheroes/jacob.gif';
import mirnoff from './media/heroes/mirnoff.png';
import dante from './media/NFTheroes/dante.gif';
import demias from './media/NFTheroes/demias.gif';
import kenneth from './media/NFTheroes/kenneth.gif';
import isabell from './media/NFTheroes/isabell.gif';
import samson from './media/heroes/samson.png';
import selena from './media/NFTheroes/selena.gif';
import sana from './media/NFTheroes/sana.gif';
import durax from './media/NFTheroes/durax.gif';
import kazos from './media/NFTheroes/kazos.gif';
import ifrit from './media/NFTheroes/ifrit.gif';
import deathbarrel from './media/NFTheroes/deathBarrel.webp';
import barbarossa from './media/NFTheroes/barbarossa.gif';
import wallaroo from './media/NFTheroes/wallaroo.gif';
import oakacorn from './media/NFTheroes/oakAcorn.gif';
import boo from './media/NFTheroes/boo.gif';
import garba from './media/NFTheroes/garba.gif';
import justina from './media/NFTheroes/justina.gif';
import leopold from './media/NFTheroes/leopold.gif';
import gordonanddurden from './media/NFTheroes/gordon&durden.gif';
import kimblee from './media/NFTheroes/kimblee.gif';
import ged from './media/NFTheroes/ged.gif';
import bulton from './media/NFTheroes/bulton.gif';
import fletcher from './media/NFTheroes/fletcher.gif';
import pindleroots from './media/NFTheroes/pindleroots.gif';
import lucia from './media/NFTheroes/lucia.gif';
import roots from './media/NFTheroes/roots.gif';
import zoe from './media/NFTheroes/zoe.gif';
import bb0 from './media/NFTheroes/bb-0.gif';
import zaima from './media/NFTheroes/zaima.gif';
import umogin from './media/NFTheroes/umogin.gif';
import wizy from './media/NFTheroes/wizy.gif';
import flabby from './media/NFTheroes/flabby.gif';
import jingo from './media/NFTheroes/jingo.gif';
import ez05 from './media/NFTheroes/ez05.gif';
import zeke from './media/NFTheroes/zeke.gif';
import bolkin from './media/NFTheroes/bolkin.gif';
import bjorn from './media/NFTheroes/bjorn.gif';

import agna from './media/NFTheroes/agna.gif';
import aide from './media/NFTheroes/aide.gif';
import akhenaton from './media/NFTheroes/akhenaton.gif';
import akrak from './media/NFTheroes/akrak.gif';
import akumu from './media/NFTheroes/akumu.gif';
import azazel from './media/NFTheroes/azazel.gif';
import barnard from './media/NFTheroes/barnard.gif';
import beatrice from './media/NFTheroes/beatrice.gif';
import bishop from './media/NFTheroes/bishop.gif';
import claudia from './media/NFTheroes/claudia.gif';
import cleo from './media/NFTheroes/cleo.gif';
import danishka from './media/NFTheroes/danishka.gif';
import diros from './media/NFTheroes/diros.gif';
import doumash from './media/NFTheroes/doumash.gif';
import falk from './media/NFTheroes/falk.gif';
import frost from './media/NFTheroes/frost.gif';
import jahanna from './media/NFTheroes/jahanna.gif';
import jia from './media/NFTheroes/jia.gif';
import juriel from './media/NFTheroes/juriel.gif';
import kateNova from './media/NFTheroes/kateNova.gif';
import kingTitan from './media/NFTheroes/kingTitan.gif';
import kouga from './media/NFTheroes/kouga.gif';
import labagas from './media/NFTheroes/labagas.gif';
import lavina from './media/NFTheroes/lavina.gif';
import liu from './media/NFTheroes/liu.gif';
import luddy from './media/NFTheroes/luddy.gif';
import miko from './media/NFTheroes/miko.gif';
import naomi from './media/NFTheroes/naomi.gif';
import nerdan from './media/NFTheroes/nerdan.gif';
import raxos from './media/NFTheroes/raxos.gif';
import sunWukong from './media/NFTheroes/sunWukong.gif';
import tasaria from './media/NFTheroes/tasaria.gif';
import tempest from './media/NFTheroes/tempest.gif';
import valsharah from './media/NFTheroes/valsharah.gif';
import zafrina from './media/NFTheroes/zafrina.gif';




export const heroes = [

    // Agna
    {
      name: (
        <>
          Agna - <span className='affiliation'>Destruction</span> /{" "}
          <span className='class'>Caster</span>
        </>
      ),
      id: 73,
      abilities: (
        <div className="abilitiesContainer">
          {/* Primary Ability */}
          <div className="primaryAbility">
            <span className="attackName">Normal Attack</span>
            <br/>
            Deals damage proportion to <span className='green'>135%</span> of ATK to an enemy.
            <br/><br/>
            <span className='green'>Card Match</span>: Has a <span className='green'>75%</span> chance of <span className='orange'>removing</span> <span className='green'>1</span> buff from the target.
          </div>
  
          {/*Secondary Ability */}
          <div className="secondaryAbility">
            <span className="attackName">Sparking Spanking</span>
            <br/>
            Deals damage proportion to <span className='green'>135%</span> of ATK to an enemy.
            <br/><br/>
            <span className='green'>Card Match</span>: Inflicts <span className='brown'>Stun</span> on the target for 1 turn(s) with a <span className='green'>65%</span> chance and the chances <span className='orange'>increases</span> by <span className='green'>5%</span> for each <span className='yellow'>Mark of Enchantment</span>.
            <br/><br/>
            <span className='yellow'>Mark of Enchantment</span> DEF is decreased by 10% for every mark.
          </div>
  
          {/* Tertiary Ability */}
          <div className="tertiaryAbility">
            <span className="attackName">Dangerous Attraction</span>
            <br/>
            Deals damage proportion to <span className='green'>200%</span> of ATK to an enemy.
            <br/><br/>
            <span className='green'>Card Match</span>: Damage proportion is increased to <span className='green'>240%</span>. Increases the duration fo active CC effects or debuffs on the target by <span className='green'>1</span> turn(s). Has an extra turn after attacking if she ahs any stacks of <span className='yellow'>Enchanting Whip</span>.
            <br/><br/>
            <span className='yellow'>Enchanting Whip</span> Agna's next attack will ignore Resist and Stun for 1 turn(s) with ATK increased by 25%.
          </div>
  
          {/* Placeholder for Passive Ability */}
          <div className="passiveAbility">
            <span className="attackName">Suppression</span>
            <br/>
            When Agna attacks an enemy, she places <span className='green'>1</span> stack(s) of <span className='yellow'>Mark of Enchantment</span> on the target. If an enemy has 3 stacks of <span className='yellow'>Mark of Enchantment</span>, she steals the targe's turn gauge by <span className='green'>20%</span> and gains <span className='green'>1</span> stack(s) of <span className='yellow'>Enchanting Whip</span>.
          </div>
        </div>
      ),
      stats: {
        sun: 'Bad',
        star: 'Normal',
        moon: 'Good',
        hp: '2165',
        atk: '511',
        def: '242',
        perception: '60',
        craft: '49',
        region: 'Volgnaar',
      },
      image: agna, // Assuming 'agna' is a reference to the image import for Agna
      rarity: 'legendary',
    },

  {
    name: (
      <>
        Alenia - <span className='affiliation'>Harmony</span> /{" "}
        <span className='class'>Tanker</span>
      </>
    ),
    id: 1,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Attacks the enemy, dealing <span className="green">135%</span> of your
          ATK to the target &amp; gain <span className="green">1</span> mana.
          <br />
          <br />
          <span className="green">Card Match:</span> Gain{" "}
          <span className="green">2</span> Mana.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Sacrifice (Active)</span>
          <br />
          <span className='brown'>Guard</span> an ally for <span className="green">2</span> turn(s).
          <br />
          <br />
          <span className='green'>Card Match:</span> Grants <span className="brown">DEF Up</span> to the target
          for <span className="green">2</span> turn(s).
          <br />
          <br />
          <span className="orange">Guard:</span>{" "}
          The guarding Champion will take enemies' attack instead.
          <br />
          <br />
          <span className="orange">DEF Up:</span>{" "}
          Increases DEF by <span className="green">70%</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Divine Blessing (Active)</span>
          <br />
          Grants <span className="brown">DMG Resist</span> for{" "}
          <span className="green">2</span> turn(s) and{" "}
          <span className="brown">Resist Up</span> for{" "}
          <span className="green">2</span> turn(s) to all allies.
          <br />
          <br />
          <span className="green">Card Match:</span> Has a{" "}
          <span className="green">40%</span> chance of Taunting all enemies for{" "}
          <span className="green">1</span> turn(s).
          <br />
          <br />
          <span className="orange">DMG Resist:</span>{" "}
          Take <span className="green">30%</span> less damage.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Holy Shield (Passive)</span>
          <br />
          When the HP of an ally other than self falls to{" "}
          <span className="green">40%</span> or below, <span className='orange'>removes</span> all buffs from self
          and <span className='orange'>increases</span> turn gauge by <span className="green">100%</span> (triggers
          once per ally up to <span className="green">3</span> times per battle.)
        </div>
      </div>
    ),
    stats: {
      sun: "NORMAL",
      star: "GOOD",
      moon: "BAD",
      hp: 2576,
      atk: 446,
      def: 287,
      perception: 53,
      craft: 45,
      region: "ASTRAKHEIM",
    },
    image: alenia,
    rarity: "legendary",
  },

  // Azazel (unreleased)
  {
    name: (
      <>
        Azazel - <span className='affiliation'>Unknown</span> /{" "}
        <span className='class'>Unknown</span>
      </>
    ),
    id: 78,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>135%</span> of an ally with highest ATK to an enemy and <span className='orange'>heals</span> an ally with lowest HP for <span className='green'>5%</span> HP.
          <br />
          <br />
          <span className="green">Card Match:</span> Gain{" "}
          <span className="green">2</span> Mana.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Spell Orb (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>150%</span> of ATK of an ally with Highest ATK to an enemy and gains <span className='green'>1</span> mana.
          <br />
          <br />
          <span className='green'>Card Match:</span> Uses part of the damage dealt to <span className='orange'>heals</span> an ally with lowest HP.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Curse Explosion (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>105%</span> of the ATK of an ally with Highest ATK to all enemies and inflicts <span className='brown'>Crit Rate Down</span> for <span className='green'>2</span> turn(s).
          <br />
          <br />
          <span className="green">Card Match:</span> Grants a <span className='brown'>Barrier</span> proportion to <span className='green'>100%</span> of ATK to all allies.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Pain Siphon (Passive)</span>
          <br />
            When an ally is hit with a Crit damage, performs a base attack against the attacker and <span className='orange'>increases</span> turn gauge by <span className='green'>15%</span>.
        </div>
      </div>
    ),
    stats: {
      sun: 'Good',
      star: 'Bad',
      moon: 'Normal',
      hp: '2218',
      atk: '535',
      def: '266',
      perception: '54',
      craft: '39',
      region: 'Ka-Drax',
    },
    image: azazel,
    rarity: 'legendary',
  },

    // Beatrice
    {
      name: (
        <>
          Beatrice - <span className='affiliation'>Harmony</span> /{" "}
          <span className='class'>Tanker</span>
        </>
      ),
      id: 75,
      abilities: (
        <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
            <span className="attackName">Normal Attack</span>
            <br />
            Deals damage proportion to <span className='green'>125%</span> of ATK to an enemy and <span className='orange'>decreases</span> their turn gauge by <span className='green'>5%</span>.
            <br /><br />
            <span className='green'>Card Match</span>: The turn gauge reduction <span className='orange'>increases</span> to <span className='green'>15%</span>.
          </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Angel Dive (Active)</span>
          <br />
          Deals damage equal to <span className="green">145%</span> of ATK to an enemy. Has a <span className='green'>60%</span> chance of <span className='orange'>taunting</span> the target for <span className='green'>1</span> turn(s).
          <br />
          <br />
          <span className='green'>Card Match:</span> Chance of <span className='orange'>taunting</span> the target <span className='orange'>increases</span> to <span className='green'>75%</span>. Gains <span className='brown'>Block Rate Up</span> for <span className='green'>2</span> turn(s).
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Guardian Angel (Active)</span>
          <br />
          Gains <span className='green'>3</span> stacks of <span className='orange'>Attract</span>.
          <br />
          <br />
          <span className="green">Card Match:</span> Grants <span className='brown'>DEF Up</span> to all allies for <span className='green'>2</span> turn(s).
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Angel Counter</span>
          <br />
          Blocking an attack activates the counter stance for <span className='green'>2</span> turn(s). Every <span className='green'>4th</span> attack to an ally triggers a counterattack to <span className='green'>1</span> random enemy.
        </div>
      </div>
      ),
      stats: {
        sun: 'Good',
        star: 'Good',
        moon: 'Bad',
        hp: '2436',
        atk: '461',
        def: '272',
        perception: '59',
        craft: '50',
        region: 'Astraheim',
      },
      image: beatrice,
      rarity: 'legendary',
    },
  
    // Bishop
    {
      name: (
        <>
          Bishop - <span className='affiliation'>Harmony</span> /{" "}
          <span className='class'>Striker</span>
        </>
      ),
      id: 76,
      abilities: (
        <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
            <span className="attackName">Normal Attack</span>
            <br />
            Deals damage proportion to <span className='green'>135%</span> of ATK to an enemy.
            <br /><br />
            <span className='green'>Card Match</span>: Damage proportion <span className='orange'>increases</span> to <span className='green'>175%</span>.
          </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Critical Draw (Active)</span>
          <br />
          Deals damage equal to <span className="green">155%</span> of ATK to an enemy.
          <br />
          <br />
          <span className='green'>Card Match:</span> Damage proportion <span className='orange'>increases</span> to <span className='green'>185%</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Rumble Shuffle (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>200%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match</span>:Become <span className='yellow'>Overlord</span> for <span className='green'>2</span> turn(s). Crit Power is <span className='orange'>multiplied</span> by <span className='green'>2</span> if already <span className='yellow'>Overlord</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Overload</span>
          <br />
          Crit Power <span className='orange'>increases</span> by <span className='green'>10%</span> for every debuff inflicted on the target.
        </div>
      </div>
      ),
      stats: {
        sun: 'Good',
        star: 'Good',
        moon: 'Bad',
        hp: '2084',
        atk: '576',
        def: '227',
        perception: '47',
        craft: '55',
        region: 'Astraheim',
      },
      image: bishop,
      rarity: 'legendary',
    },

  // Danishka 
  {
    name: (
      <>
        Danishka - <span className='affiliation'>Harmony</span> /{" "}
        <span className='class'>Supporter</span>
      </>
    ),
    id: 72,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage proportion to <span className="green">130%</span> of ATK to an enemy and gains <span className="green">1</span> mana.
          <br /><br />
          <span className="green">Card Match:</span> Gain <span className="green">3</span> Mana.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Barrier of Blessing (Active)</span>
          <br />
          Grants a <span className='brown'>Barrier</span> proportion to <span className='green'>75%</span> of ATK to an ally and gains <span className="green">1</span> mana.
          <br /><br />
          <span className="green">Card Match:</span> <span className='orange'>Increases</span> the target's turn gauge by <span className='green'>25%</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Lucky Protection Stance (Active)</span>
          <br />
          Changes to the Lotus Postition and gains a <span className='brown'>Barrier</span> proportion to <span className='green'>75%</span> of ATK.
          <br /><br />
          <span className="green">Card Match:</span> <span className='orange'>Removes</span> <span className='green'>1</span> CC effect from all allies and grants them <span className='brown'>CC Immunity</span> for <span className='green'>1</span> turn(s).
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">God of Benediction (Passive)</span>
          <br />
          As long as Danishka is in <span className='yellow'>Lotus Stance</span>, the Dodge Reate of allies other than self is <span className='orange'>increased</span> by <span className='green'>30%</span>. Being hit while in <span className='yellow'>Lotus Stance</span> has a <span className='green'>50%</span> chance of canceling the stance.
        </div>
    ),
      </div>
    ),
    stats: {
      sun: 'Normal',
      star: 'Normal',
      moon: 'Bad',
      hp: '2420',
      atk: '501',
      def: '272',
      perception: '50',
      craft: '47',
      region: 'ASTRAKHEIM',
    },
    image: danishka,
    rarity: 'legendary',
  },

  {
    name: (
      <>
        Feraella - <span className='affiliation'>Harmony</span> /{" "}
        <span className='class'>Supporter</span>
      </>
    ),
    id: 2,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of the ATK of an ally with high ATK to an enemy and gains <span className="green">1</span> mana.
          <br /><br />
          <span className="green">Card Match:</span> Gain <span className="green">3</span> Mana.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Melodic Shot (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> ATK of an ally with high ATK to <span className='green'>2</span> random enemies and gains <span className="green">1</span> mana.
          <br /><br />
          <span className="green">Card Match:</span> Gains <span className='yellow'>Musical Inspiration</span>.
          <br /><br />
          <span className="orange">Musical Inspiration:</span> A resource necessary for Feraella to perform music.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Music Performance (Active)</span>
          <br />
          Gains <span className="green">1</span> stack(s) of <span className='yellow'>Musical Inspiration</span> and starts playing music.
          <br /><br />
          <span className="green">Card Match:</span> Gains <span className="green">3</span> stack(s) of <span className='yellow'>Musical Inspiration</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Heavenly Performance (Passive)</span>
          <br />
          While Feraella is in the <span className='yellow'>performance posture</span>, all allies' ATK <span className='orange'>increases</span> <span className="green">20%</span>, DEF <span className='orange'>increases</span> <span className="green">20%</span>, and SPD <span className='orange'>increases</span> <span className="green">20%</span>. If Feraella is hit during the performance posture or when her turn ends, she loses <span className='green'>1</span> <span className="orange">stack of Music Inspiration</span> and when she loses all of them, the <span className='yellow'>performance posture</span> will end.
        </div>
      </div>
    ),
    stats: {
      sun: "VERY GOOD",
      star: "GOOD",
      moon: "BAD",
      hp: 2193,
      atk: 524,
      def: 244,
      perception: 53,
      craft: 50,
      region: "ASTRAKHEIM",
    },
    image: feraella,
    rarity: "legendary",
  },

  {
    name: (
      <>
        Saphir - <span className='affiliation'>Harmony</span> /{" "}
        <span className='class'>Striker</span>
      </>
    ),
    id: 3,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">135%</span> ATK of an ally with high ATK to the target and gains <span className="green">1</span> mana.
          <br /><br />
          <span className="green">Card Match:</span> Gain <span className="green">2</span> Mana.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Divine Slash (Active)</span>
          <br />
          Deals damage equal to <span className="green">155%</span> of ATK to an enemy.
          <br /><br />
          <span className="green">Card Match:</span> Grants <span className="brown">ATK Up</span> to self for <span className="green">2</span> turn(s).
          <br /><br />
          <span className="orange">ATK Up:</span>
          <br />
          Increases ATK by <span className="green">20%</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Divine Burst (Active)</span>
          <br />
          Deals damage equal to <span className="green">110%</span> of ATK to all enemies.
          <br /><br />
          <span className="green">Card Match:</span> Damage increases to <span className="green">130%</span>.
          <br /><br />
          Damage <span className='orange'>increases</span> by <span className="green">15%</span> for every buff on self.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Holy Blade : Judgement (Passive)</span>
          <br />
          His attacks are guaranteed to hit as long as he has an active buff. Gaining a buff <span className='orange'>increases</span> his turn gauge by <span className="green">20%</span> and has a <span className="green">50%</span> chance of gaining <span className='green'>1</span> stack of <span className="orange">Direct Hit</span>.
          <br /><br />
          This effect triggers <span className="green">1</span> time every turn.
        </div>
      </div>
    ),
    stats: {
      sun: "GOOD",
      star: "NORMAL",
      moon: "NORMAL",
      hp: 2039,
      atk: 570,
      def: 230,
      perception: 45,
      craft: 53,
      region: "ASTRAKHEIM",
    },
    image: saphir,
    rarity: "legendary",
  },



  {
    name: (
      <>
        Vera - <span className='affiliation'>Harmony</span> /{" "}
        <span className='class'>Caster</span>
      </>
    ),
    id: 4,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Attacks the enemy, dealing <span className="green">135%</span> of your ATK to the target.
          <br /><br />
          <span className="green">Card Match:</span> <span className="green">75%</span> chance of removing <span className="green">1</span> Buff from an enemy.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Ice Crystal (Active)</span>
          <br />
          Summons a sentient <span className='yellow'>ice crystal</span>. Vera can summon Up to <span className="green">3</span> <span className='yellow'>ice crystal</span>. The summoned <span className='yellow'>ice crystal</span> will deal damage equal to <span className="green">100%</span> of ATK to a random enemy every <span className="green">2</span> turn(s), and inflicts <span className="brown">SPD Down</span> for <span className="green">2</span> turn(s). The damage will <span className='orange'>increase</span> in proportion to the number of summoned <span className='yellow'>ice crystals</span>.
          <br /><br />
          <span className="green">Card Match:</span> Vera's turn gauge will be <span className='orange'>increased</span> by <span className="green">30%</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Crystal Blizzard (Active)</span>
          <br />
          Deals damage equal to <span className="green">100%</span> of ATK to all enemies.
          <br /><br />
          <span className="green">Card Match:</span> Has a <span className="green">40%</span> chance of <span className='orange'>Freeze</span> the targets for <span className="green">1</span> turn(s). If the target is under <span className="brown">SPD Down</span> status, this effect is guaranteed <span className="green">100%</span> of the time.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Iceborne (Passive)</span>
          <br />
          Vera will start the battle with <span className="green">1 ice crystal</span> and inflicts <span className="brown">SPD Down</span> on the enemy that attacked her for <span className="green">2</span> turn(s).
        </div>
      </div>
    ),
    stats: {
      sun: "NORMAL",
      star: "GOOD",
      moon: "NORMAL",
      hp: 2189,
      atk: 493,
      def: 250,
      perception: 51,
      craft: 54,
      region: "ASTRAKHEIM",
    },
    image: vera,
    rarity: "legendary",
  }
  ,


  {
    name: (
      <>
        Barbara - <span className='affiliation'>Prosperity</span> /{" "}
        <span className='class'>Supporter</span>
      </>
    ),
    id: 5,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">125%</span> of ATK to an enemy and <span className='orange'>increases</span> the turn gauge of an ally with high ATK by <span className="green">10%</span>.
          <br /><br />
          <span className="green">Card Match:</span> Gains <span className="green">2</span> mana.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Duet Dance (Active)</span>
          <br />
          Grants <span className="brown">Assist Attack</span> to an ally for <span className="green">2</span> turn(s) and gains <span className="green">1</span> mana. <span className='orange'>Assist</span> this ally with base attack when this ally uses an active skill against an enemy. Can partner up with just one ally at a time.
          <br /><br />
          <span className="green">Card Match:</span> <span className='orange'>Restores</span> the target's turn gauge by <span className="green">30%</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Fire Dance (Active)</span>
          <br />
          Grants <span className="brown">ATK Up</span> to all allies for <span className="green">2</span> turn(s).
          <br /><br />
          <span className="green">Card Match:</span> Grants <span className='green'>1</span> stack of <span className="orange">Direct Hit</span> to targets.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Technical Step (Passive)</span>
          <br />
          Whenever an ally attacks an enemy, gains <span className="brown">Intense Dance</span>. Immediately uses advanced <span className="brown">Fire Dance</span> upon stacking <span className="green">5 Intense Dance</span>.
        </div>
      </div>
    ),
    stats: {
      sun: "GOOD",
      star: "NORMAL",
      moon: "VERY BAD",
      hp: 2243,
      atk: 541,
      def: 247,
      perception: 41,
      craft: 50,
      region: "FRIDIENA",
    },
    image: barbara,
    rarity: "legendary",
  },


  {
    name: (
      <>
        Richter - <span className='affiliation'>Destruction</span> /{" "}
        <span className='class'>Tanker</span>
      </>
    ),
    id: 6,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">120%</span> of ATK to an enemy.
          <br /><br />
          <span className="green">Card Match:</span> Has a <span className="green">65%</span> chance of <span className='orange'>Taunt</span> the target for <span className="green">1</span> turn(s).
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Soul Absorption (Active)</span>
          <br />
          Deals damage equal to <span className="green">120%</span> of DEF to <span className="green">2</span> random enemies and <span className='orange'>decreases</span> their turn gauge by <span className="green">10%</span>.
          <br /><br />
          <span className="green">Card Match:</span> The turn gauge reduction <span className='orange'>increases</span> to <span className="green">25%</span> and further <span className='orange'>decreases</span> the target's turn gauge by <span className="green">5%</span> for every active debuff on the target.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Fear from Skies (Active)</span>
          <br />
          Deals damage equal to <span className="green">100%</span> of all DEF to all enemies.
          <br /><br />
          <span className="green">Card Match:</span> <span className='orange'>Decreases</span> each target's turn gauge by <span className="green">30%</span>. Further <span className='orange'>decreases</span> target's turn gauge by <span className="green">5%</span> for every active debuff on the target.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Rider Agility (Passive)</span>
          <br />
          If Richter hasn't taken any damage since the end of his last turn, inflicts <span className='green'>1</span> debuff out of <span className="orange">ATK Down</span>, <span className="orange">DEF Down</span>, <span className="orange">Hit Rate Down</span> on a random enemy for <span className="green">2</span> turn(s) at the start of his turn.
        </div>

      </div>
    ),
    stats: {
      sun: "BAD",
      star: "NORMAL",
      moon: "BAD",
      hp: 2604,
      atk: 441,
      def: 291,
      perception: 59,
      craft: 38,
      region: "KA-DRAX",
    },
    image: richter,
    rarity: "legendary",
  },

  {
    name: (
      <>
        Veronika - <span className='affiliation'>Destruction</span> /{" "}
        <span className='class'>Tanker</span>
      </>
    ),
    id: 7,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">120%</span> of ATK to an enemy and <span className='orange'>decreases</span> their turn gauge by <span className="green">10%</span>.
          <br />
          <br />
          <span className="green">Card Match:</span> <span className='orange'>Increases</span> Turn Gauge by <span className="green">30%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Witch's Gift (Active)</span>
          <br />
          Deals damage equal to <span className="green">140%</span> of ATK to <span className='green'>2</span> random enemies and inflicts <span className="orange">SPD Down</span> for <span className="green">1</span> turn(s).
          <br />
          <br />
          <span className="green">Card Match:</span> Inflicts <span className='orange'>SPD Down</span> on targets for <span className="green">2</span> turn(s).
          <br />
          <br />
          <span className="orange">SPD Down:</span> Decreases SPD by <span className="green">20%</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Iron Maiden (Active)</span>
          <br />
          Locks herself up in the <span className='yellow'>Iron Maiden</span> and grants a <span className="orange">Barrier</span> equal to <span className="green">75%</span> of ATK to all allies.
          <br />
          <br />
          <span className="green">Card Match:</span> <span className='orange'>Increases</span> turn gauge by <span className="green">30%</span>. Grants <span className="orange">DMG Resist</span> to all allies for <span className="green">1</span> turn(s).
          <br />
          <br />
          <span className="orange">Barrier:</span> Mitigates a set amount of damage.
          <br />
          <br />
          <span className="orange">DMG Resist:</span> Take <span className="green">30%</span> less damage.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Sturdy Iron Maiden (Passive)</span>
          <br />
          When starting the turn inside the <span className='yellow'>Iron Maiden</span> with a <span className='orange'>Barrier</span>, gains <span className="green">1</span> count(s) of <span className="yellow">Gift of Affliction</span>. <span className="yellow">Gift of Affliction</span> can stack up to <span className="green">5</span>. She is <span className='orange'>immune</span> to CC effects while inside the <span className='yellow'>Iron Maiden</span>.
          <br />
          <br />
          <span className="orange">Gift of Affliction:</span> Every count of <span className="yellow">Gift of Affliction</span> <span className='orange'>increases</span> ATK by <span className="green">7%</span>, SPD by <span className="green">7%</span>, and DEF by <span className="green">7%</span>.
        </div>
      </div>
    ),
    stats: {
      sun: "NORMAL",
      star: "NORMAL",
      moon: "BAD",
      hp: 2520,
      atk: 446,
      def: 291,
      perception: 58,
      craft: 37,
      region: "KA-DRAX",
    },
    image: veronika,
    rarity: "legendary",
  },


  {
    name: (
      <>
        Desdemona - <span className='affiliation'>Destruction</span> /{" "}
        <span className='class'>Supporter</span>
      </>
    ),
    id: 8,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of ATK of an ally with high ATK to an enemy and gains <span className="green">1</span> mana.
          <br />
          <br />
          <span className="green">Card Match:</span> Mana gain <span className='orange'>increases</span> to <span className="green">3</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Devil's Cello (Active)</span>
          <br />
          Deals damage equal to <span className="green">155%</span> of ATK of an ally with high ATK to an enemy and gains <span className="green">1</span> mana.
          <br />
          <br />
          <span className="green">Card Match:</span> Inflicts <span className="brown">ATK Down</span> on the target for <span className="green">2</span> turn(s).
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Song of Death (Active)</span>
          <br />
          Deals damage equal to <span className="green">110%</span> of ATK of an ally with high ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increases</span> to <span className="green">130%</span> and off own aura effect for <span className="green">2</span> turn(s) to <span className='orange'>ignore</span> enemy DEF of <span className="green">30%</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Showtime (Passive)</span>
          <br />
          As long as Desdemona is in battle, allies take <span className="green">15%</span> less damage.
        </div>
      </div>
    ),
    stats: {
      sun: "GOOD",
      star: "BAD",
      moon: "NORMAL",
      hp: 2268,
      atk: 501,
      def: 261,
      perception: 55,
      craft: 40,
      region: "KA-DRAX",
    },
    image: desdemona,
    rarity: "legendary",
  },


  {
    name: (
      <>
        Varnas - <span className='affiliation'>Destruction</span> /{" "}
        <span className='class'>Tanker</span>
      </>
    ),
    id: 9,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">135%</span> of max HP to an enemy and gains <span className="green">1</span> mana.
          <br />
          <br />
          <span className="green">Card Match:</span> Mana gain <span className='orange'>increases</span> to <span className="green">2</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">The Magic of Death</span>
          <br />
          Deals damage equal to <span className="green">135%</span> of max HP to an enemy and has a <span className="green">50%</span> chance of <span className="orange">Stun</span> the target for <span className="green">1</span> turn(s).
          <br />
          <br />
          <span className="green">Card Match:</span> <span className='orange'>Stun</span> chance <span className='orange'>increases</span> to <span className="green">85%</span>.
          <br />
          <br />
          <span className="brown">Stun</span><br />
          Becomes stunned, disabling all actions.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Sword of Doom (Active)</span>
          <br />
          Deals damage equal to <span className="green">100%</span> of max HP to all enemies.
          <br />
          <br />
          <span className="green">Card Match:</span> Has a <span className="green">40%</span> chance of <span className="brown">Taunt</span> targets for <span className="green">1</span> turn(s).
          <br />
          <br />
          <span className="brown">Taunt</span><br />
          Auto-casts a basic attack to the taunter.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Majesty of Immortal</span>
          <br />
          At the start of the battle, inflicts <span className="brown">Resist Down</span> and <span className="brown">Hit Rate Down</span> on all enemies for <span className="green">2</span> turn(s). Inflicts <span className="brown">Immortal Dread</span> on the target he attacks for <span className="green">1</span> turn(s). Chance of <span className='orange'>Stunning/Taunting</span> <span className='orange'>increases</span> by <span className="green">5%</span> for every count of <span className="brown">Immortal Dead</span> (max count <span className="green">3</span>).
          <br />
          <br />
          <span className="brown">Resist Down</span><br />
          Decrease effect resistance by <span className="green">30%</span>.
        </div>
      </div>
    ),
    stats: {
      sun: "NORMAL",
      star: "GOOD",
      moon: "NORMAL",
      hp: 2660,
      atk: 426,
      def: 297,
      perception: 66,
      craft: 43,
      region: "KA-DRAX",
    },
    image: varnas,
    rarity: "legendary",
  },


  {
    name: (
      <>
        Kage - <span className='affiliation'>Destruction</span> /{" "}
        <span className='class'>Striker</span>
      </>
    ),
    id: 10,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">135%</span> of ATK to an enemy and gains <span className="green">1</span> mana.
          <br />
          <br />
          <span className="green">Card Match:</span> Mana gain <span className='orange'>increases</span> to <span className="green">2</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Shadow Fang (Active)</span>
          <br />
          Deals damage equal to <span className="green">155%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Recovers Kage's turn gauge by <span className="green">30%</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Shadow Bites (Active)</span>
          <br />
          Deals damage equal to <span className="green">200%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Crit Rate is <span className='orange'>multiplied</span> by <span className="green">2</span>. Landing a Crit Attack has a <span className="green">70%</span> chance of gaining an <span className='orange'>extra turn</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Shadow Beast (Passive)</span>
          <br />
          Grants <span className="brown">Mark of Beast</span> to an enemy for <span className="green">1</span> turn(s) when Kage attacks and <span className='orange'>increases</span> the Crit Rate by <span className="green">20%</span> when Kage attacks a target with <span className="brown">Mark of Beast</span>.
        </div>
      </div>
    ),
    stats: {
      sun: "NORMAL",
      star: "NORMAL",
      moon: "VERY GOOD",
      hp: 1904,
      atk: 601,
      def: 215,
      perception: 53,
      craft: 48,
      region: "KA-DRAX",
    },
    image: kage,
    rarity: "legendary",
  },

    // Jia
    {
      name: (
        <>
          Jia - <span className='affiliation'>Prosperity</span> /{" "}
          <span className='class'>Striker</span>
        </>
      ),
      id: 81,
      abilities: (
        <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>135%</span> of ATK to an enemy and gains <span className="green">1</span> mana.
          <br />
          <br />
          <span className="green">Card Match:</span> Mana gain <span className='orange'>increases</span> to <span className="green">2</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Flurry (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>155%</span> of ATK to an enemy.
          <br />
          <br />
          <span className='green'>Card Match:</span> Damage proportion is <span className='orange'>increased</span> to <span className='green'>175%</span> and further <span className='orange'>increases</span> by <span className='green'>15%</span> for every <span className='yellow'>Fighting Spirit</span>.
          <br />
          <br />
          <span className="yellow">Fighting Spirit</span>: Stacking <span className='green'>5</span> <span className='yellow'>Fighting Spirit</span> will unlock the <span className='yellow'>True Balance</span> stance.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Dragon Strike (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>200%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage proportion is <span className='orange'>increased</span> to <span className='green'>220%</span> and further <span className='orange'>increases</span> by <span className='green'>20%</span> for every <span className='yellow'>Fighting Spirit</span>.
          <br />
          <br />
          <span className="yellow">Fighting Spirit</span>: Stacking <span className='green'>5</span> <span className='yellow'>Fighting Spirit</span> will unlock the <span className='yellow'>True Balance</span> stance.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Stance Switch (Passive)</span>
          <br />
          Gains <span className='yellow'>Fighting Spirit</span> based on the level of the energy card used. When the stack count of <span className='yellow'>Fighting Spirit</span> is <span className='green'>5</span> or more, she activates the <span className='yellow'>True Balance</span> stance.
          <br />
          <br />
          <span className='yellow'>True Balance</span>: While in True Balance stance, Crit Rate is <span className='orange'>increased</span> by <span className='green'>30%</span> and Crit Pow is <span className='orange'>increased</span> by <span className='green'>60%</span>.
        </div>
      </div>
      ),
      stats: {
        sun: 'Good',
        star: 'Bad',
        moon: 'Bad',
        hp: '1949',
        atk: '601',
        def: '217',
        perception: '39',
        craft: '60',
        region: 'Fridiena',
      },
      image: jia,
      rarity: 'legendary',
    },

  // Kristoph
  {
    name: 'Kristoph - Destruction / Caster',
    id: 11,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br /><br />
          Deals damage equal to <span className="green">135%</span> of ATK to an enemy.
          <br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increases</span> to <span className="green">160%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Bat Swarm (Active)</span>
          <br /><br />
          Deals damage equal to <span className="green">155%</span> of ATK to an enemy.
          <br />
          <span className="green">Card Match:</span> Inflicts <span className="brown">Unhealable</span> on the target for <span className="green">2</span> turn(s). Recovers <span className="green">3%</span> HP for every <span className="yellow">Vampire's Mark</span> on the target.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Bloodbath (Active)</span>
          <br /><br />
          Deals damage equal to <span className="green">110%</span> of ATK to all enemies.
          <br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increases</span> to <span className="green">130%</span>. Damage <span className='orange'>increases</span> by <span className="green">10%</span> for every <span className="yellow">Vampire's Mark</span> on the target.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Life Drain (Passive)</span>
          <br /><br />
          When Kristoph attacks an enemy, he places <span className="green">1</span> stack(s) of <span className="yellow">Vampire's Mark</span> on the target. Killing an enemy restores his turn gauge by <span className="green">15%</span> for every <span className="yellow">Vampire's Mark</span> on the target. If the target has a <span className="orange">Barrier</span> active, it will be removed, and the target will take <span className="green">5%</span> damage to their Max HP.
        </div>
      </div>
    ),
    stats: {
      sun: 'NORMAL',
      star: 'GOOD',
      moon: 'NORMAL',
      hp: 2261,
      atk: 529,
      def: 234,
      perception: 57,
      craft: 47,
      region: 'KA-DRAX',
    },
    image: kristoph,
    rarity: 'legendary',
  },

  // Lavina
  {
    name: (
      <>
        Lavina - <span className='affiliation'>Harmony</span> /{" "}
        <span className='class'>Striker</span>
      </>
    ),
    id: 82,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>125%</span> of ATK to an enemy and <span className='orange'>increases</span> turn gauge by <span className='green'>5%</span>.
          <br />
          <br />
          <span className="green">Card Match:</span> <span className='orange'>Increases</span> turn gauge by <span className='green'>15%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Sword of Judgement (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>155%</span> of ATK to an enemy.
          <br />
          <br />
          <span className='green'>Card Match:</span> Damage proportion is <span className='orange'>increased</span> to <span className='green'>185%</span>. Ignores <span className='green'>50%</span> of the target's DEF if in <span className='yellow'>Execution Stance</span>.
          <br />
          <br />
          <span className="yellow">Execution Stance:</span>ATK <span className='orange'>increased</span> by <span className='green'>30%</span> and DEF <span className='orange'>decreases</span> by <span className='green'>35%</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Verdict of the Scales (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>160%</span> of ATK to <span className='green'>2</span> random enemies.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage proportion is <span className='orange'>increased</span> to <span className='green'>200%</span>. Ignores <span className='green'>50%</span> of the target's DEF if in <span className='yellow'>Execution Stance</span>.
          <br />
          <br />
          <span className="yellow">Execution Stance:</span> ATK <span className='orange'>increased</span> by <span className='green'>30%</span> and DEF <span className='orange'>decreases</span> by <span className='green'>35%</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Enforcer of Justice (Passive)</span>
          <br />
          Gains <span className='green'>1</span> stack(s) of <span className='yellow'>Will of Justice</span> whenever taking an action. Takes the <span className='yellow'>Execution Stance</span> for <span className='green'>2</span> turn(s) upon stacking <span className='green'>2</span> <span className='yellow'>Will of Justice</span>.
        </div>
      </div>
    ),
    stats: {
      sun: 'Good',
      star: 'Very Good',
      moon: 'Bad',
      hp: '1994',
      atk: '545',
      def: '232',
      perception: '50',
      craft: '59',
      region: 'Astrakheim',
    },
    image: lavina,
    rarity: 'legendary',
  },

    // Luddy
    {
      name: (
        <>
          Luddy - <span className='affiliation'>Prosperity</span> /{" "}
          <span className='class'>Striker</span>
        </>
      ),
      id: 84,
      abilities: (
        <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>125%</span> of ATK to an enemy and <span className='orange'>increases</span> turn gauge by <span className='green'>5%</span>.
          <br />
          <br />
          <span className="green">Card Match:</span> <span className='orange'>Increases</span> turn gauge by <span className='green'>15%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Orbital Swing (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>155%</span> of ATK to an enemy.
          <br />
          <br />
          <span className='green'>Card Match:</span> Gains <span className='yellow'>Heavy Hammer</span> for <span className='green'>1</span> turn(s).
          <br />
          <br />
          <span className="yellow">Heavy Hammer</span>:{" "}
          Attacks don't crit, but ATK <span className='orange'>increases</span> by <span className='green'>50%</span> instead.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Galaxy Hammer (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>110%</span> of ATK to all enemies.
          <br />
          <br />
          <span className="green">Card Match:</span> When she has <span className='yellow'>Heavy Hammer</span>, she ignores <span className='green'>35%</span> of the target's DEF, and her damage <span className='orange'>increases</span> by <span className='green'>30%</span>. 
          <br />
          <br />
          <span className="yellow">Heavy Hammer</span>:{" "}
          Attacks don't crit, but ATK <span className='orange'>increases</span> by <span className='green'>50%</span> instead.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Force Field Breaker (Passive)</span>
          <br />
          If there are no active debuffs at the start of Luddy's turn, she gains <span className='orange'>ATK Up</span> for <span className='green'>1</span> turn(s). This effect goes away when Luddy takes an action.
        </div>
      </div>
      ),
      stats: {
        sun: 'Normal',
        star: 'Bad',
        moon: 'Normal',
        hp: '2039',
        atk: '570',
        def: '227',
        perception: '38',
        craft: '59',
        region: 'Novatrium',
      },
      image: luddy,
      rarity: 'legendary',
    },
  
    // Miko
    {
      name: (
        <>
          Miko - <span className='affiliation'>Prosperity</span> /{" "}
          <span className='class'>Caster</span>
        </>
      ),
      id: 85,
      abilities: (
        <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Delas damage proportion to <span className='green'>135%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> YHas a <span className='green'>75%</span> chance of removing <span className='green'>1</span> buff(s) from the target.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Storm Call (Active)</span>
          <br />
          Delas damage to <span className='green'>70%</span> of ATK to all enemies.
          <br />
          <br />
          <span className='green'>Card Match:</span> Inflicts <span className='orange'>ATK Down</span> on targets for <span className='green'>2</span> turn(s). If he has <span className='green'>4</span> count(s) or more <span className='yellow'>Purifying Power</span>, she also inflicts <span className='orange'>Buff Block</span> on them for <span className='green'>1</span> turn.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Lightning Call (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>80%</span> of ATK to all enemies.
          <br />
          <br />
          <span className="green">Card Match:</span> Inflicts <span className='orange'>DMG Reduction</span> on targets for <span className='green'>2</span> turn(s). If she has <span className='green'>4</span> count(s) or more of <span className='yellow'>Purifying Power</span>, she also <span className='orange'>increases</span> the duration fo defuffs on them by <span className='green'>1</span>.
          <br />
          <br />
          <span className="yellow">Purifying Power:</span>{" "}
          This power suppresses evil. Ignores the Resist of the skill target by <span className='green'>10%</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Wind Cycle (Passive)</span>
          <br />
          Inflicts <span className='orange'>SPD Down</span> on all enemies for <span className='green'>2</span> turn(s) at the start of the battle. At the start of her turn, gains <span className='green'>1</span> stack(s) of <span className='yellow'>Purifying Power</span> and ignores <span className='green'>10%</span> of the skill target's Resist for every gained stack of <span className='yellow'>Purifying Power</span>.
        </div>
      </div>
      ),
      stats: {
        sun: 'Normal',
        star: 'Good',
        moon: 'Bad',
        hp: '2046',
        atk: '553',
        def: '236',
        perception: '43',
        craft: '59',
        region: 'Fridiena',
      },
      image: miko,
      rarity: 'legendary',
    },
  
    // Naomi
    {
      name: (
        <>
          Naomi - <span className='affiliation'>Prosperity</span> /{" "}
          <span className='class'>Supporter</span>
        </>
      ),
      id: 86,
      abilities: (
        <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>130%</span> of ATK of an ally with Highest ATK to an enemy and gains <span className="green">1</span> mana.
          <br />
          <br />
          <span className="green">Card match:</span> Mana Gain <span className='orange'>increases</span> to <span className='green'>3</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Bomb Toss (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>150%</span> of ATK of an ally with Highest ATK to an enemy and gains <span className="green">1</span> mana.
          <br />
          <br />
          <span className='green'>Card Match:</span> Inflicts <span className='orange'>Resist Down</span> on the target for <span className='green'>2</span> turn(s).
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Broadside Barrage (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>105%</span> of ATK of an ally with Highest ATK to all enemies and <span className='orange'>increases</span>the duration fo debuffs on targets by <span className='green'>1</span> turn(s).
          <br />
          <br />
          <span className="green">Card Match:</span> Inflicts <span className='orange'>Take More Damage</span> on targets for <span className='green'>2</span> turn(s).
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Industrious Merchant (Passive)</span>
          <br />
          Restores the turn gauge of self and of an ally with Highest ATK by <span className='green'>10%</span> every time a debuff is inflicted on an enemy.
        </div>
      </div>
      ),
      stats: {
        sun: 'Bad',
        star: 'Normal',
        moon: 'Bad',
        hp: '2394',
        atk: '518',
        def: '244',
        perception: '39',
        craft: '48',
        region: 'Novatrium',
      },
      image: naomi,
      rarity: 'legendary',
    },

      // Sun Wukong
  {
    name: (
      <>
        Sun Wukong - <span className='affiliation'>Harmony</span> /{" "}
        <span className='class'>Striker</span>
      </>
    ),
    id: 87,
    abilities: (
      <div className="abilitiesContainer">
      {/* Primary Ability */}
      <div className="primaryAbility">
        <span className="attackName">Normal Attack (Active)</span>
        <br />
        Deals damage proportion to <span className='green'>135%</span> of ATK and gains <span className="green">1</span> mana.
        <br />
        <br />
        <span className="green">Card match:</span> Mana Gain <span className='orange'>increases</span> to <span className='green'>2</span>.
      </div>

      {/* Secondary Ability */}
      <div className="secondaryAbility">
        <span className="attackName">Boundless Strikes (Active)</span>
        <br />
        Deals damage proportion to <span className='green'>155%</span> of ATK to an enemy.
        <br />
        <br />
        <span className='green'>Card Match:</span> Multiplies Crit Rate by <span className='green'>2</span> before attacking.
      </div>

      {/* Tertiary Ability */}
      <div className="tertiaryAbility">
        <span className="attackName">Heaven Crusher (Active)</span>
        <br />
        Deals damage proportion to <span className='green'>110%</span> of ATK to all enemies.
        <br />
        <br />
        <span className="green">Card Match:</span> Multiplies Crit rate by <span className='green'>2</span> before attacking.
      </div>

      {/* Passive Ability */}
      <div className="passiveAbility">
        <span className="attackName">Decoy (Passive)</span>
        <br />
        Starts battle with <span className='green'>2</span> <span className='yellow'>clones</span>. Consumes <span className='yellow'>clones</span> and limits incoming damage to <span className='green'>51%</span> of max HP upon being hit. Crit attack by self or an ally generates a <span className='yellow'>clone</span> (up to <span className='green'>5</span>).
      </div>
    </div>
    ),
    stats: {
      sun: 'Good',
      star: 'Good',
      moon: 'Normal',
      hp: '1972',
      atk: '583',
      def: '222',
      perception: '47',
      craft: '55',
      region: 'Astrakheim',
    },
    image: sunWukong,
    rarity: 'legendary',
  },


  // Violet
  {
    name: 'Violet - Destruction / Caster',
    id: 12,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">135%</span> of ATK to an enemy and gains <span className="green">1</span> mana.
          <br /><br />
          <span className="green">Card Match:</span> Mana gain <span className='orange'>increases</span> by <span className="green">2</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Blood Temptation</span>
          <br />
          Deals damage equal to <span className="green">155%</span> of ATK to an enemy.
          <br /><br />
          <span className="green">Card Match:</span> Inflicts <span className="brown">ATK Down</span> and <span className="brown">DMG Reduction</span> on the target for <span className="green">2</span> turn(s).
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Fatal Temptation</span>
          <br />
          Deals damage equal to <span className="green">110%</span> of ATK to all enemies.
          <br /><br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increases</span> to <span className="green">125%</span>. <span className='orange'>Increases</span> the turn gauge of self and of an ally with high ATK by <span className="green">30%</span> and changes her <span className='yellow'>ambiance effect</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Queen of Enhancement</span>
          <br />
          As long as Violet is in battle, she has an <span className='yellow'>ambiance effect</span> that affects the enemies. This <span className='yellow'>ambiance effect</span> changes every time she uses <span className='yellow'>Fatal Temptation</span>.
          <br /><br />
          <span className="attackName">Queen's Majesty</span>
          <br />
          While Violet is in battle, enemy ATK decreases by <span className="green">20%</span>.
          <br /><br />
          <span className="attackName">Queen's Fame</span>
          <br />
          While Violet is in battle, enemy DEF is decreased by <span className="green">35%</span>.
        </div>
      </div>
    ),
    stats: {
      sun: 'NORMAL',
      star: 'NORMAL',
      moon: 'GOOD',
      hp: 2142,
      atk: 535,
      def: 244,
      perception: 56,
      craft: 46,
      region: 'KA-DRAX',
    },
    image: violet,
    rarity: 'legendary',
  },


  // Dimentianus
  {
    name: 'Dimentianus - Union : Destruction / Striker',
    id: 13,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">135%</span> of ATK to an enemy and gains <span className="green">1</span> mana.
          <br /><br />
          <span className="green">Card Match:</span> Mana gain <span className='orange'>increases</span> by <span className="green">2</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Dimensional Slash</span>
          <br />
          Deals damage equal to <span className="green">95%</span> of ATK to all enemies. This attack is more effective against fewer targets.
          <br /><br />
          <span className="green">Card Match:</span> Before attacking, inflicts <span className="brown">Resist Down</span> on targets for <span className="green">2</span> turn(s).
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Black Hole (Active)</span>
          <br />
          Deals damage equal to <span className="green">110%</span> of ATK to all enemies. This attack is more effective against fewer targets.
          <br /><br />
          <span className="green">Card Match:</span> Damage increases to <span className="green">130%</span>. If he has <span className="green">5</span> stacks of <span className="yellow">Dimensional Power</span>, ignores <span className="green">50%</span> of the target's DEF.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Void Blade (Passive)</span>
          <br />
          Gains <span className="yellow">Dimensional Power</span> every time a debuff is inflicted on an enemy.
        </div>
      </div>
    ),
    stats: {
      sun: 'GOOD',
      star: 'NORMAL',
      moon: 'NORMAL',
      hp: 2151,
      atk: 532,
      def: 225,
      perception: 53,
      craft: 48,
      region: 'KA-DRAX',
    },
    image: dimentianus,
    rarity: 'legendary',
  }
  ,

  // Devi&Stan
  {
    name: 'Devi&Stan - Union : Prosperity / Tanker',
    id: 14,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">135%</span> of ATK to an enemy and gains <span className="green">1</span> mana.
          <br /><br />
          <span className="green">Card Match:</span> Mana gain increases by <span className="green">2</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Missile Barrage (Active)</span>
          <br />
          Deals damage equal to <span className="green">145%</span> of ATK to an enemy and inflicts <span className="brown">DEF Down</span> on the target for <span className="green">2</span> turn(s).
          <br /><br />
          <span className="green">Card Match:</span> Inflicts <span className="brown">Take More DMG</span> on the target for <span className="green">2</span> turn(s).
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Burst Fire (Active)</span>
          <br />
          Deals damage equal to <span className="green">100%</span> of ATK to all enemies and inflicts <span className="brown">SPD Down</span> for <span className="green">2</span> turn(s).
          <br /><br />
          <span className="green">Card Match:</span> Ignores <span className="green">15%</span> of the target's Resist for every stack of <span className="yellow">Overcharge</span> on self. <span className='orange'>Decreases</span> targets' turn gauge by <span className="green">25%</span>. Gains <span className="green">3</span> stack(s) of <span className="yellow">Overcharge</span> if there is none.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Defense Magitech Suit</span>
          <br />
          Gains <span className="green">3</span> stack(s) of <span className="yellow">Overcharge</span> at the start of the battle. Every action spends <span className="green">1</span> stack(s) and restores <span className="green">20%</span> turn gauge.
        </div>
      </div>
    ),
    stats: {
      sun: 'NORMAL',
      star: 'NORMAL',
      moon: 'NORMAL',
      hp: 2688,
      atk: 446,
      def: 303,
      perception: 46,
      craft: 51,
      region: 'NOVATRIUM',
    },
    image: deviStan,
    rarity: 'legendary',
  }
  ,

  // Magnus
  {
    name: 'Magnus - Union : Prosperity / Striker',
    id: 15,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">135%</span> of ATK to an enemy.
          <br /><br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increases</span> to <span className="green">175%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Rocket Punch (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of ATK to <span className="green">2</span> random enemies.
          <br /><br />
          <span className="green">Card Match:</span> Restores turn gauge by <span className="green">10%</span> for every enemy marked as an <span className="yellow">Alert Target</span>. Marks targets as <span className="yellow">Alert Targets</span> for <span className="green">2</span> turn(s).
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Beat Drive (Active)</span>
          <br />
          Deals damage equal to <span className="green">200%</span> of ATK to an enemy.
          <br /><br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increases</span> to <span className="green">240%</span>. Damage <span className='orange'>increases</span> by <span className="green">20%</span> for every enemy marked as an <span className="yellow">Alert Target</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Detect Danger (Passive)</span>
          <br />
          Magnus gains <span className="green">1</span> stack of <span className="yellow">Magnetic Force</span> when he attacks, and he gains <span className="green">2</span> if the target is marked as an <span className="yellow">Alert Target</span>. Upon stacking <span className="green">5</span> <span className="yellow">Magnetic Force</span>, he spends <span className="yellow">Magnetic Force</span> to use advanced <span className="yellow">Beat Drive</span> against an enemy with high ATK and gains an <span className='orange'>extra</span> turn.
        </div>
      </div>
    ),
    stats: {
      sun: 'GOOD',
      star: 'GOOD',
      moon: 'BAD',
      hp: 2173,
      atk: 608,
      def: 212,
      perception: 39,
      craft: 60,
      region: 'NOVATRIUM',
    },
    image: magnus,
    rarity: 'legendary',
  },

  // Lena
  {
    name: 'Lena - Union : Prosperity / Caster',
    id: 16,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">135%</span> of ATK to an enemy and gains <span className="green">1</span> mana.
          <br /><br />
          <span className="green">Card Match:</span> Mana gain <span className='orange'>increases</span> by <span className="green">2</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Remote Detonation</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of ATK to <span className="green">2</span> random enemies.
          <br /><br />
          <span className="green">Card Match:</span> Plants a <span className="orange">Time Bomb</span> that deals fixed damage equal to <span className="green">160%</span> of ATK in <span className="green">2</span> turn(s).
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Dust Explosion (Active)</span>
          <br />
          Deals damage equal to <span className="green">110%</span> of ATK to all enemies.
          <br /><br />
          <span className="green">Card Match:</span> Remove <span className="green">2</span> buff from the target(s) and deal additional <span className="green">60%</span> damage to any targets with a <span className="brown">Time bomb</span> debuff.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Chain Bomb (Passive)</span>
          <br />
          <span className='orange'>increases</span> the turn gauge of self and of an ally with high ATK by <span className="green">30%</span> after planting a <span className="brown">Time Bomb</span> <span className="green">3</span> time(s).
        </div>
      </div>
    ),
    stats: {
      sun: 'VERY BAD',
      star: 'NORMAL',
      moon: 'NORMAL',
      hp: 2023,
      atk: 571,
      def: 228,
      perception: 43,
      craft: 59,
      region: 'NOVATRIUM',
    },
    image: lena,
    rarity: 'legendary',
  },

    // Zafrina
    {
      name: (
        <>
          Zafrina - <span className='affiliation'>Destruction</span> /{" "}
          <span className='class'>Caster</span>
        </>
      ),
      id: 90,
      abilities: (
        <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>135%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card match:</span> Damage <span className='orange'>increases</span> to <span className='green'>175%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Minion Explosion (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>100%</span> of ATK to all enemies and loses <span className='green'>1</span> summoned <span className='yellow'>minion(s)</span>.
          <br />
          <br />
          <span className='green'>Card Match:</span> <span className='orange'>Increases</span> the damage proportion by <span className='green'>10%</span> per summoned <span className='yellow'>minion(s)</span>. If there are <span className='green'>3</span> or more summoned <span className='yellow'>minion(s)</span>, inflict <span className='green'>1</span> of the following debuffs on the target(s) for <span className='green'>2</span> turn(s): <span className='brown'>DEF Down</span>, <span className='brown'>SPD Down</span>, <span className='brown'>Take More DMG</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Dark Curtain (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>110%</span> of ATK to all enemies.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increases</span> by <span className='green'>20%</span> for <span className='green'>every</span> <span className='yellow'>Minion</span>. Reduces the duration of the target's buffs by <span className='green'>1</span> turn(s). Gains the same number of <span className='yellow'>Minions</span> as the number of buffs removed.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Dark Summoning (Passive)</span>
          <br />
          Zafrina summons <span className='green'>4</span> <span className='yellow'>minions</span> at the start of the battle. ATK <span className='orange'>increases</span> by <span className='green'>5%</span> for every <span className='yellow'>minion</span> she has (up to <span className='green'>6</span>).
        </div>
      </div>
      ),
      stats: {
        sun: 'Normal',
        star: 'Bad',
        moon: 'Very Good',
        hp: '2118',
        atk: '523',
        def: '255',
        perception: '57',
        craft: '47',
        region: 'Ka-Drax',
      },
      image: zafrina,
      rarity: 'legendary',
    },

  // Akumu
  {
    name: (
      <>
        Akumu - <span className='affiliation'>Destruction</span> /{" "}
        <span className='class'>Tanker</span>
      </>
    ),
    id: 77,
    abilities: (
      <div className="abilitiesContainer">
      {/* Primary Ability */}
      <div className="primaryAbility">
          <span className="attackName">Normal Attack</span>
          <br />
          Deals damage proportion to <span className='green'>125%</span> of max HP to an enemy and <span className='orange'>decreases</span> their turn gauge by <span className='green'>5%</span>.
          <br /><br />
          <span className='green'>Card Match</span>: The turn gauge reduction <span className='orange'>increases</span> to <span className='green'>15%</span>.
        </div>

      {/* Secondary Ability */}
      <div className="secondaryAbility">
        <span className="attackName">Hell Slash (Active)</span>
        <br />
        Deals damage equal to <span className="green">155%</span> of max HP to an enemy. 
        <br />
        <br />
        <span className='green'>Card Match:</span> Damage proportion <span className='orange'>increases</span> to <span className='green'>195%</span>.
      </div>

      {/* Tertiary Ability */}
      <div className="tertiaryAbility">
        <span className="attackName">Hellish Warfield (Active)</span>
        <br />
        Deals damage proportion to <span className='green'>110%</span> of max HP to all enemies.
        <br />
        <br />
        <span className="green">Card Match:</span> Damage proportion <span className='orange'>increases</span> to <span className='green'>130%</span>.
      </div>

      {/* Passive Ability */}
      <div className="passiveAbility">
        <span className="attackName">Angel Counter</span>
        <br />
        <span className='orange'>Guard</span> an ally with Highest ATK when the battle begins. <span className='orange'>Recovers</span> the turn gauge of all allies by <span className='green'>50%</span> after killing the guarded target immediately when the target's HP falls below <span className='green'>40%</span>. If the guarded target doesn't exist when the turn begins, <span className='green'>20%</span> of HP will be lost to designate another target to guard.
      </div>
    </div>
    ),
    stats: {
      sun: 'Good',
      star: 'Normal',
      moon: 'Normal',
      hp: '3960',
      atk: '341',
      def: '191',
      perception: '51',
      craft: '32',
      region: 'Ka-Drax',
    },
    image: akumu, // Image reference
    rarity: 'epic',
  },

  // Bjorn
  {
    name: 'Bjorn - Union : Harmony / Tanker',
    id: 17,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">125%</span> of DEF to an enemy and decreases their turn gauge by <span className="green">5%</span>.
          <br /><br />
          <span className="green">Card Match:</span> The turn gauge reduction <span className='orange'>increases</span> to <span className="green">15%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">War Cry (Active)</span>
          <br />
          Deals damage equal to <span className="green">115%</span> of DEF to <span className="green">2</span> random enemies and <span className='orange'>decreases</span> their turn gauge by <span className="green">5%</span>.
          <br /><br />
          <span className="green">Card Match:</span> The turn gauge reduction <span className='orange'>increases</span> by <span className="green">6%</span> for every count of <span className="yellow">Blessing of the Vikings</span> on self.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Sealed Blade (Active)</span>
          <br />
          Deals damage equal to <span className="green">110%</span> of DEF to all enemies and inflicts <span className="brown">DEF Down</span> for <span className="green">1</span> turn(s).
          <br /><br />
          <span className="green">Card Match:</span> Inflicts <span className="brown">DEF Down</span> for <span className="green">2</span> turn(s) on targets. Ignores <span className="green">10%</span> of target's Resist for every count of <span className="yellow">Blessing of the Vikings</span> on self. <span className="yellow">Blessing of the Vikings</span> damage <span className='orange'>increases</span> to <span className="green">130%</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Pride of Vikings</span>
          <br />
          Bjorn starts the battle with <span className='green'>5</span> <span className="yellow">Blessing of Vikings</span> and loses <span className='green'>1</span> <span className="yellow">Blessing of Vikings</span> each time Bjorn's attacked.
        </div>
      </div>
    ),
    stats: {
      sun: 'NORMAL',
      star: 'VERY GOOD',
      moon: 'NORMAL',
      hp: 1752,
      atk: 333,
      def: 195,
      perception: 41,
      craft: 34,
      region: 'ASTRAKHEIM',
    },
    image: bjorn,
    rarity: 'epic',
  },


  // Adan
  {
    name: 'Adan - Union : Harmony / Tanker',
    id: 18,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">100%</span> of ATK to an enemy.
          <br /><br />
          <span className="green">Card Match:</span> Has a <span className="green">70%</span> chance of <span className='orange'>Taunting</span> the target for <span className="green">1</span> turn(s).
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Blow of Devotion</span>
          <br />
          Deals damage equal to <span className="green">150%</span> of ATK to an enemy and inflicts <span className="brown">ATK Down</span> on them for <span className="green">1</span> turn(s).
          <br /><br />
          <span className="green">Card Match:</span> Inflicts <span className="brown">ATK Down</span> on the target for <span className="green">2</span> turn(s) and gains <span className='green'>1</span> <span className="brown">stack(s)</span> of <span className="yellow">Warrior's Conviction</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Summon Holy Sword</span>
          <br />
          Deals damage equal to <span className="green">170%</span> of ATK to an enemy and <span className='orange'>decreases</span> their turn gauge by <span className="green">20%</span>.
          <br /><br />
          <span className="green">Card Match:</span> <span className='orange'>Decreases</span> the target's turn gauge by <span className="green">50%</span> and gains <span className="green">2</span> stack(s) of <span className="yellow">Warrior's Conviction</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Strong Faith (Passive)</span>
          <br />
          Adan gains <span className="brown">1</span> stack(s) of <span className="yellow">Warrior's Conviction</span>. Upon stacking <span className='green'>7</span> <span className="yellow">Warrior's Conviction</span>, he places the <span className="yellow">Blessed Assurance ambiance</span> on all allies other than himself. Those with <span className="yellow">Blessed Assurance ambiance</span> consume <span className="green">2-3</span> stack(s) of <span className="yellow">Warrior's Conviction</span> upon being hit and lose the <span className="yellow">Blessed Assurance ambiance</span> when all stacks are consumed.
        </div>
      </div>
    ),
    stats: {
      sun: 'NORMAL',
      star: 'GOOD',
      moon: 'GOOD',
      hp: 1816,
      atk: 337,
      def: 202,
      perception: 42,
      craft: 34,
      region: 'ASTRAKHEIM',
    },
    image: adan,
    rarity: 'epic',
  },


  // Seraph
  {
    name: 'Seraph - Union : Harmony / Supporter',
    id: 19,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">135%</span> of ATK to an enemy and <span className='orange'>increases</span> the turn gauge of an ally with high ATK by <span className="green">10%</span>.
          <br /><br />
          <span className="green">Card Match:</span> Gains <span className="green">2</span> mana.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Purification (Active)</span>
          <br />
          Grants <span className="brown">SPD Up</span> to an ally for <span className="green">2</span> turn(s) and gains <span className="green">1</span> mana.
          <br /><br />
          <span className="green">Card Match:</span> Spends <span className="green">2</span> stack(s) of <span className="yellow">Angel's Fury</span> if available to <span className='orange'>increase</span> the target's turn gauge by <span className="green">50%</span>. Gains <span className="green">1</span> stack(s) of <span className="yellow">Angel's Fury</span> if she doesn't have enough.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Soul Equilibrium (Active)</span>
          <br />
          Grants <span className="brown">SPD Up</span> to all allies for <span className="green">2</span> turn(s).
          <br /><br />
          <span className="green">Card Match:</span> Spends <span className="green">3</span> stack(s) of <span className="yellow">Angel's Fury</span> if available to grant <span className="brown">Pierce Up</span> for <span className="green">2</span> turn(s). Gains <span className="green">2</span> stack(s) of <span className="yellow">Angel's Fury</span> if she doesn't have enough.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">The Avenger of Justice</span>
          <br />
          Seraph gains <span className="green">5</span> stack(s) of <span className="yellow">Angel's Fury</span> at the start of the battle.
        </div>
      </div>
    ),
    stats: {
      sun: 'GOOD',
      star: 'NORMAL',
      moon: 'GOOD',
      hp: 1596,
      atk: 345,
      def: 186,
      perception: 39,
      craft: 37,
      region: 'ASTRAKHEIM',
    },
    image: seraph,
    rarity: 'epic',
  },


  // Sophia
  {
    name: 'Sophia - Union : Harmony / Striker',
    id: 20,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">135%</span> of ATK to an enemy.
          <br /><br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increases</span> to <span className="green">175%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Multiple Arrows (Active)</span>
          <br />
          Deals damage equal to <span className="green">145%</span> of ATK to an enemy and places a <span className="brown">Mark</span> on the target for <span className="green">2</span> turn(s).
          <br /><br />
          <span className="green">Card Match:</span> <span className='orange'>increases</span> turn gauge by <span className="green">20%</span>.
          <br />
          <span className="brown">Mark:</span> Increases damage taken by <span className="green">30%</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Sky Piercing Arrow</span>
          <br />
          Deals damage equal to <span className="green">200%</span> of ATK to an enemy.
          <br /><br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increases</span> to <span className="green">240%</span>. Damage <span className='orange'>increases</span> by <span className="green">10%</span> for every active debuff on the target.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Arrow of Condemnation</span>
          <br />
          <span className='orange'>Restores</span> turn gauge by <span className="green">10%</span> for every debuff on her target. <span className='orange'>Restores</span> only up to <span className="green">50%</span>.
        </div>
      </div>
    ),
    stats: {
      sun: 'VERY GOOD',
      star: 'BAD',
      moon: 'GOOD',
      hp: 1504,
      atk: 421,
      def: 156,
      perception: 35,
      craft: 42,
      region: 'ASTRAKHEIM',
    },
    image: sophia,
    rarity: 'epic',
  },

  // Beckett
  {
    name: (
      <>
        Beckett - <span className='affiliation'>Union : Harmony</span> /{" "}
        <span className='class'>Striker</span>
      </>
    ),
    id: 21,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          <br />
          Deals damage equal to <span className="green">135%</span> of ATK to an enemy and gains <span className='green'>1</span> mana.
          <br />
          <span className="green">Card Match:</span> Mana gain <span className='orange'>increases</span> by <span className='green'>2</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Summery Judgement (Active)</span>
          <br />
          Deals damage equal to <span className="green">155%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increases</span> to <span className='green'>185%</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Probity Execution (Active)</span>
          <br />
          Deals damage equal to <span className="green">110%</span> of ATK to all enemies.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increases</span> to <span className='green'>130%</span>. Damage <span className='orange'>increases</span> further by <span className='green'>50%</span> if Will of <span className='yellow'>Judgement</span> is active.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Inquisitor's Will (Passive)</span>
          <br />
          Beckett begins with Will of <span className='yellow'>Judgement</span> at the start of the battle. If <span className='yellow'>Will of Judgement</span> is lost, he gains <span className='yellow'>Resolute</span>  at the start of his turn. Re-gains<span className='yellow'>Will of Judgement</span> upon stacking <span className='green'>3</span>.
        </div>
      </div>
    ),
    stats: {
      sun: 'VERY GOOD',
      star: 'BAD',
      moon: 'GOOD',
      hp: 1368,
      atk: 393,
      def: 156,
      perception: 38,
      craft: 45,
      region: 'ASTRAKHEIM',
    },
    image: beckett,
    rarity: 'epic',
  },

    // Claudia
    {
      name: (
        <>
          Claudia - <span className='affiliation'>Prosperity</span> /{" "}
          <span className='class'>Supporter</span>
        </>
      ),
      id: 80,
      abilities: (
        <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>130%</span> of ATK to an enemy and heals an ally with lowest HP for <span className="green">5%</span> of ATK.
          <br />
          <br />
          <span className="green">Card Match:</span> Gain{" "}
          <span className="green">2</span> Mana.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Circle of Support (Active)</span>
          <br />
          <span className='orange'>Increases</span> the turn gauge <span className='green'>20%</span> of an ally and gains <span className='green'>1</span> Mana.
          <br />
          <br />
          <span className='green'>Card Match:</span> Helas the target for <span className='green'>15%</span> HP.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Circle of Protection (Active)</span>
          <br />
          Grants a <span className="brown">Barrier</span> proportion to <span className='green'>75%</span> of ATK to all allies.
          <br />
          <br />
          <span className="green">Card Match:</span> Grants <span className='yellow'>Time Trade</span> to an ally with Highest ATK other than slef. The ally with <span className='yellow'>Time Trade</span> will be takes <span className='green'>2</span> actions of the next turn and is <span className='orange'>stunned</span> for <span className='green'>1</span> turn.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Holy Shield (Passive)</span>
          <br />
          Her healing, Barriers, and turn gauge <span className='orange'>increase</span> effects are improved for targets with <span className='green'>50%</span> HP or below.
        </div>
      </div>
      ),
      stats: {
        sun: 'Normal',
        star: 'Normal',
        moon: 'Bad',
        hp: '1539',
        atk: '391',
        def: '171',
        perception: '33',
        craft: '42',
        region: 'Fridiena',
      },
      image: claudia,
      rarity: 'epic',
    },

  // Nina
  {
    name: (
      <>
        Nina - <span className='affiliation'>Union : Harmony</span> /{" "}
        <span className='class'>Supporter</span>
      </>
    ),
    id: 22,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          <br />
          Deals damage equal to <span className="green">130%</span> of ATK to an enemy and gains 1 mana.
          <br />
          <span className="green">Card Match:</span> Mana gain increases by 3.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Prayer of Wish (Active)</span>
          <br />
          Grants an ally a <span className='orange'>Barrier</span> equal to <span className="green">50%</span> of ATK and <span className='orange'>removes</span> <span className='green'>1</span> debuffs. Gains <span className='green'>1</span> Mana.
          <br />
          <br />
          <span className="green">Card Match:</span> <span className='orange'>Barrier's</span> HP <span className='orange'>increases</span> to 75% of ATK and <span className='orange'>removes</span> <span className='green'>2</span> debuffs.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Bubble Shield (Active)</span>
          <br />
          <span className='orange'>Heals</span> all allies' HP equal to <span className="green">80%</span> of ATK.
          <br />
          <br />
          <span className="green">Card Match:</span> <span className='orange'>Removes</span> <span className='green'>1</span> debuff(s) from targets.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Wave of Water (Passive)</span>
          <br />
          <span className='orange'>Increases</span> turn gauge by <span className='green'>10%</span> when an ally is inflicted with a debuff.
        </div>
      </div>
    ),
    stats: {
      sun: 'BAD',
      star: 'NORMAL',
      moon: 'NORMAL',
      hp: 1691,
      atk: 366,
      def: 190,
      perception: 35,
      craft: 33,
      region: 'ERETRIA',
    },
    image: nina,
    rarity: 'epic',
  },

  // Ripple
  {
    name: (
      <>
        Ripple - <span className='affiliation'>Union : Harmony</span> /{" "}
        <span className='class'>Caster</span>
      </>
    ),
    id: 23,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">135%</span> of ATK to an enemy and gains <span className='green'>1</span> mana.
          <br />
          <br />
          <span className="green">Card Match:</span> Mana gain <span className='orange'>Increases</span> by <span className='green'>2</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Fairy Fire (Active)</span>
          <br />
          Deals damage equal to <span className="green">125%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage <span className='orange'>Increases</span> to <span className='green'>145%</span>. Spends <span className='green'>2</span> stack(s) of <span className='yellow'>Fairy Dust</span> if available to inflict <span className='orange'>Sleep</span> on the target for <span className='green'>2</span> turn(s).
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Tranquility</span>
          <br />
          Grants <span className='orange'>SPD Up</span> to all allies for <span className='green'>2</span> turn(s).
          <br />
          <br />
          <span className="green">Card Match:</span> <span className='orange'>Increases</span> the turn gauge of all allies by <span className='green'>20%</span>. Further <span className='orange'>Increases</span> by <span className='green'>20%</span> if <span className='yellow'>Fairy Dust</span> stack count is <span className='green'>3</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Whims of a Fairy</span>
          <br />
          Ripple begins with <span className='green'>4</span> stack(s) of <span className='yellow'>Fairy Dust</span> at the start of the battle and <span className='orange'>consumes</span> <span className='green'>1</span> stack(s) upon being hit. Gains <span className='green'>2</span> stack(s) when an enemy dies.
        </div>
      </div>
    ),
    stats: {
      sun: 'GOOD',
      star: 'GOOD',
      moon: 'BAD',
      hp: 1489,
      atk: 405,
      def: 166,
      perception: 37,
      craft: 39,
      region: 'ERETRIA',
    },
    image: ripple,
    rarity: 'epic',
  },

  // Roxane
  {
    name: (
      <>
        Roxane - <span className='affiliation'>Union : Harmony</span> /{" "}
        <span className='class'>Striker</span>
      </>
    ),
    id: 24,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">125%</span> of ATK to an enemy and <span className='orange'>Recovers</span> Roxane's turn gauge by <span className="green">5%</span>.
          <br />
          <br />
          <span className="green">Card Match:</span> Roxane's Turn Gauge <span className='orange'>Recovers</span> To <span className='green'>15%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Dragonfire Dive (Active)</span>
          <br />
          Deals damage equal to <span className="green">95%</span> of ATK to all enemies.
          <br />
          <br />
          <span className="green">Card Match:</span> Gains <span className='orange'>Crit Rate Up</span> for <span className='green'>2</span> turn(s).
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Dragon Form (Active)</span>
          <br />
          <span className='yellow'>Transforms into a dragon</span>. <span className='yellow'>Transformation</span> duration is equal to the number of <span className='yellow'>Dragon Rune</span> counts. Also, gains <span className='green'>2</span> counts of <span className='orange'>Direct Hit</span>.
          <br />
          <br />
          <span className="green">Card Match:</span> <span className='yellow'>Transforms</span> after gaining <span className='green'>2</span> count(s) of <span className='yellow'>Dragon Rune</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Dragon Rune (Passive)</span>
          <br />
          Creates <span className='green'>1</span> <span className='yellow'>Dragon Rune</span> when Roxane's turn begins and when an ally, excluding self, deals critical damage.
        </div>
      </div>
    ),
    stats: {
      sun: 'GOOD',
      star: 'VERY GOOD',
      moon: 'NORMAL',
      hp: 1487,
      atk: 431,
      def: 159,
      perception: 35,
      craft: 42,
      region: 'ERETRIA',
    },
    image: roxane,
    rarity: 'epic',
  },

    // Tempest
    {
      name: (
        <>
          Tempest - <span className='affiliation'>Destruction</span> /{" "}
          <span className='class'>Striker</span>
        </>
      ),
      id: 88,
      abilities: (
        <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>125%</span> of ATK to an enemy. <span className='orange'>Increases</span> turn gauge by <span className='green'>5%</span>.
          <br />
          <br />
          <span className="green">Card match:</span> Turn gauge <span className='orange'>increases</span> by <span className='green'>15%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Gravity Manipulation (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>155%</span> of ATK to an enemy.
          <br />
          <br />
          <span className='green'>Card Match:</span> Turn gauge <span className='orange'>increases</span> by <span className='green'>20%</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Gravity Rays (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>200%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increases</span> to <span className='green'>240%</span>. Removes all buffs from self and deals extra damage proportion to <span className='green'>2%</span> of the target's max HP for <span className='green'>every</span> removed buff to the target.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Existence of Another Dimension (Passive)</span>
          <br />
          Tempest's SPD increases by <span className='green'>3%</span> for every active buff on self.
        </div>
      </div>
      ),
      stats: {
        sun: 'Bad',
        star: 'Normal',
        moon: 'Normal',
        hp: '1504',
        atk: '421',
        def: '146',
        perception: '39',
        craft: '35',
        region: 'Ka-Drax',
      },
      image: tempest,
      rarity: 'epic',
    },
  
    // Valsharah
    {
      name: (
        <>
          Valsharah - <span className='affiliation'>Destruction</span> /{" "}
          <span className='class'>Support</span>
        </>
      ),
      id: 89,
      abilities: (
        <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>125%</span> of ATK to an enemy and <span className='orange'>increases</span> turn gauge of an ally with Highest ATK by <span className='green'>10%</span>.
          <br />
          <br />
          <span className="green">Card match:</span> Gains <span className='green'>2</span> mana.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Mind Drain (Active)</span>
          <br />
          Grants <span className='orange'>Accuracy Up</span> to all allies for <span className='green'>2</span> turn(s). Gains <span className='green'>1</span> mana.
          <br />
          <br />
          <span className='green'>Card Match:</span> Removes <span className='green'>1</span> CC effect(s) from targets.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Nightmare (Active)</span>
          <br />
          Decreaes the turn gauge of all enemies by <span className='green'>25%</span>.
          <br />
          <br />
          <span className="green">Card Match:</span> <span className='orange'>Decreases</span> targets' turn gauge by <span className='green'>40%</span>. Inflicts <span className='orange'>Sleep</span> for <span className='green'>2</span> turn(s) on targets whose turn gauge becomes <span className='green'>0</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">The Root of Nightmare (Passive)</span>
          <br />
          Inflicts extra stack(s) of <span className='yellow'>Nightmare</span> matching the number of active debuffs on the enemy (up to <span className='green'>5</span>).
        </div>
      </div>
      ),
      stats: {
        sun: 'Good',
        star: 'Bad',
        moon: 'Normal',
        hp: '1710',
        atk: '349',
        def: '192',
        perception: '42',
        craft: '30',
        region: 'Ka-Drax',
      },
      image: valsharah,
      rarity: 'epic',
    },
  

  // Deborah
  {
    name: 'Deborah - Union : Harmony / Caster',
    id: 26,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">135%</span> of ATK to an enemy.
          <br /><br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increases</span> to <span className="green">160%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Become Obese! (Active)</span>
          <br />
          Deals damage equal to <span className="green">155%</span> of ATK to an enemy.
          <br /><br />
          <span className="green">Card Match:</span> Grants <span className="brown">SPD Down</span> to target for <span className="green">2</span> turn(s).
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Become Obese, All of</span>
          <br />
          Deals damage equal to <span className="green">110%</span> of ATK to all enemies.
          <br /><br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increases</span> to <span className="green">130%</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Escaping the Curse</span>
          <br />
          Deborah starts battle with <span className="green">6</span> count(s) of <span className="yellow">Curse of Obesity</span>. Her <span className="yellow">Curse of Obesity</span> <span className='orange'>decreases</span> when she is attacked or based on the level of the Energy Card used. Once all counts of the <span className="yellow">Curse of Obesity</span> are removed, she transforms into her fit form.
        </div>
      </div>
    ),
    stats: {
      sun: 'BAD',
      star: 'GOOD',
      moon: 'NORMAL',
      hp: 1525,
      atk: 400,
      def: 178,
      perception: 37,
      craft: 39,
      region: 'ERETRIA',
    },
    image: deborah,
    rarity: 'epic',
  },


  // Deborah SECOND FORM
  {
    name: 'Deborah - SECOND FORM',
    id: 27,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">140%</span> of ATK to an enemy.
          <br /><br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increases</span> to <span className="green">165%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Become Obese! (Active)</span>
          <br />
          Deals damage equal to <span className="green">165%</span> of ATK to an enemy.
          <br /><br />
          <span className="green">Card Match:</span> Inflicts <span className="brown">SPD Down</span> on the target for <span className="green">2</span> turn(s).
          <br />
          <span className="brown">SPD Down:</span> Decreases SPD by 20%.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Become Obese, All of</span>
          <br />
          Deals damage equal to <span className="green">115%</span> of ATK to all enemies.
          <br /><br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increases</span> to <span className="green">135%</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Escaping the Curse</span>
          <br />
          ATK is <span className='orange'>increases</span> by <span className="green">20%</span> and SPD is <span className='orange'>increases</span> by <span className="green">20%</span>.
        </div>
      </div>
    ),
    stats: {
      sun: 'BAD',
      star: 'GOOD',
      moon: 'NORMAL',
      hp: 1525,
      atk: 400,
      def: 178,
      perception: 37,
      craft: 39,
      region: 'ERETRIA',
    },
    image: deborah,
    rarity: 'epic',
  },

    // Nerdan
    {
      name: (
        <>
          Nerdan - <span className='affiliation'>Harmony</span> /{" "}
          <span className='class'>Striker</span>
        </>
      ),
      id: 83,
      abilities: (
        <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>135%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage proportion is <span className='orange'>increases</span> to <span className='green'>175%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Double Shot (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>130%</span> of ATK to <span className='green'>2</span> random enemies.
          <br />
          <br />
          <span className='green'>Card Match:</span> Restores turn gauge by <span className='green'>20%</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Arrow Shower (Active)</span>
          <br />
          Deals damage proportion to <span className='green'>200%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage proportion is <span className='orange'>increased</span> to <span className='green'>240%</span>. Ignores <span className='green'>35%</span> of the target's DEF if the stack count of <span className='yellow'>Experienced Archer</span> is <span className='green'>5</span> or more.
          <br />
          <br />
          <span className="yellow">Experienced Archer</span>: ATK <span className='orange'>increases</span> by <span className='green'>8%</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Elf Archer's Agility (Passive)</span>
          <br />
          Gains <span className='green'>1</span> stack(s) of <span className='yellow'>Experienced Archer</span> whenever taking an action. Stacks up to <span className='green'>5</span>.
          <br />
          <br />
          <span className="yellow">Experienced Archer</span>: ATK <span className='orange'>increases</span> by <span className='green'>8%</span>.
        </div>
      </div>
      ),
      stats: {
        sun: 'Bad',
        star: 'Very Good',
        moon: 'Bad',
        hp: '1453',
        atk: '383',
        def: '165',
        perception: '35',
        craft: '42',
        region: 'Eretria',
      },
      image: nerdan,
      rarity: 'epic',
    },

  // Yeonhwa
  {
    name: 'Yeonhwa - Union : Prosperity / Supporter',
    id: 28,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of ATK to an enemy and gains <span className="green">1</span> mana.
          <br /><br />
          <span className="green">Card Match:</span> Mana gain <span className='orange'>increases</span> by <span className="green">3</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Luck Kut (Active)</span>
          <br />
          Grants <span className="brown">Resist Up</span> to an ally for <span className="green">2</span> turn(s) and gains <span className="green">1</span> mana.
          <br /><br />
          <span className="green">Card Match:</span> Grants <span className="brown">Recovery</span> to the target for <span className="green">2</span> turn(s).
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Supernatural Power</span>
          <br />
          Grants <span className="green">2</span> stack(s) of <span className="brown">Debuff Immunity</span> to all allies.
          <br /><br />
          <span className="green">Card Match:</span> Grants a <span className="brown">Barrier</span> equal to <span className="green">10%</span> of each respective target's max HP to all allies.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Ward Off Evil (Passive)</span>
          <br />
          While Yeonhwa is in battle, all allies' <span className="brown">Resist</span> is <span className='orange'>increases</span> by <span className="green">30%</span>.
        </div>
      </div>
    ),
    stats: {
      sun: 'BAD',
      star: 'GOOD',
      moon: 'VERY BAD',
      hp: 1672,
      atk: 353,
      def: 186,
      perception: 30,
      craft: 38,
      region: 'FRIDIENA',
    },
    image: yeonhwa,
    rarity: 'epic',
  },


  // Quixote
  {
    name: 'Quixote - Union : Prosperity / Tanker',
    id: 29,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">125%</span> of ATK to an enemy and <span className='orange'>decreases</span> their turn gauge by <span className="green">5%</span>.
          <br /><br />
          <span className="green">Card Match:</span> The turn gauge reduction <span className='orange'>increases</span> to <span className="green">15%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Lucky Strike (Active)</span>
          <br />
          Deals damage equal to <span className="green">150%</span> of ATK to an enemy and inflicts <span className="brown">SPD Down</span> for <span className="green">1</span> turn(s).
          <br /><br />
          <span className="green">Card Match:</span> Inflicts <span className="brown">SPD Down</span> on the target for <span className="green">2</span> turn(s).
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Lucky Counterstrike</span>
          <br />
          Deals damage equal to <span className="green">180%</span> of ATK to an enemy and <span className='orange'>decreases</span> their turn gauge by <span className="green">20%</span>.
          <br /><br />
          <span className="green">Card Match:</span> The turn gauge reduction <span className='orange'>increases</span> to <span className="green">40%</span>. Landing a <span className="brown">Crit</span> <span className='orange'>increases</span> turn gauge by <span className="green">25%</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Narcissism (Passive)</span>
          <br />
          If his attack doesn't <span className="brown">Crit</span>, the <span className="brown">Crit Rate</span> for the next attack <span className='orange'>increases</span> by <span className="green">30%</span>. If the attack does <span className="brown">Crit</span>, the turn gauge <span className='orange'>increases</span> by <span className="green">10%</span>.
        </div>
      </div>
    ),
    stats: {
      sun: 'GOOD',
      star: 'NORMAL',
      moon: 'GOOD',
      hp: 1752,
      atk: 337,
      def: 195,
      perception: 38,
      craft: 41,
      region: 'FRIDIENA',
    },
    image: quixote,
    rarity: 'epic',
  },


  // Xiaoyu
  {
    name: 'Xiaoyu - Union : Prosperity / Caster',
    id: 30,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">135%</span> of ATK to an enemy.
          <br /><br />
          <span className="green">Card Match:</span> Has a <span className="green">75%</span> chance of <span className="brown">removing</span> <span className='green'>1</span> buff(s) from the target.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Flourish (Active)</span>
          <br />
          Deals damage equal to <span className="green">155%</span> of ATK to an enemy.
          <br /><br />
          <span className="green">Card Match:</span> Inflicts <span className="brown">Unhealable</span> and <span className="brown">Buff Block</span> on the target for <span className="green">2</span> turn(s).
          <br />
          <span className="brown">Unhealable:</span> Prevents healing.
          <br />
          <span className="brown">Buff Block:</span> Prevents buff application.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Bladeshower (Active)</span>
          <br />
          Deals damage equal to <span className="green">200%</span> of ATK to an enemy.
          <br /><br />
          <span className="green">Card Match:</span> <span className='orange'>increases</span> the turn gauge of an ally with high ATK other than self by <span className="green">10%</span> for every active buff on the target and removes all buffs from the target. If there is no buff on the target, <span className='orange'>recover</span> Xiaoyu's turn gauge by <span className="green">30%</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Deadly Blade (Passive)</span>
          <br />
          Whenever an enemy gains a buff, Xiaoyu's Turn Gauge <span className='orange'>increases</span> by <span className="green">30%</span>. This effect activates once every <span className="green">2</span> turn(s).
        </div>
      </div>
    ),
    stats: {
      sun: 'VERY GOOD',
      star: 'BAD',
      moon: 'GOOD',
      hp: 1561,
      atk: 387,
      def: 164,
      perception: 32,
      craft: 44,
      region: 'FRIDIENA',
    },
    image: xiaoyu,
    rarity: 'epic',
  },


  // Trixie
  {
    name: 'Trixie - Union : Prosperity / Caster',
    id: 31,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">135%</span> of ATK to an enemy.
          <br /><br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increases</span> to <span className="green">160%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Magic Card (Active)</span>
          <br />
          Deals damage equal to <span className="green">150%</span> of ATK to an enemy.
          <br /><br />
          <span className="green">Card Match:</span> Skill is modified based on the color of the <span className='yellow'>cards</span>.
          <br />
          <span className="brown">Red:</span> Inflicts <span className="brown">ATK Down</span> on the target for <span className="green">2</span> turn(s).
          <br />
          <span className="brown">Blue:</span> Inflicts <span className="brown">DEF Down</span> on the target for <span className="green">2</span> turn(s).
          <br />
          <span className="brown">Green:</span> <span className='orange'>Decreases</span> the turn gauge of the target by <span className="green">20%</span>. Inflicts all three debuffs if she has <span className="green">6</span> <span className='yellow'>Trap Cards</span> regardless of color.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Illusion Card (Active)</span>
          <br />
          Deals damage equal to <span className="green">105%</span> of ATK to all enemies.
          <br /><br />
          <span className="green">Card Match:</span> Random. Skill is modified based on the color of the <span className='yellow'>cards</span>.
          <br />
          <span className="brown">Red:</span> Inflicts <span className="brown">ATK Down</span> on all enemies for <span className="green">2</span> turn(s).
          <br />
          <span className="brown">Blue:</span> Inflicts <span className="brown">DEF Down</span> on all enemies for <span className="green">2</span> turn(s).
          <br />
          <span className="brown">Green:</span> <span className='orange'>Decreases</span> the turn gauge of all enemies by <span className="green">20%</span>. Inflicts all three debuffs if she has <span className="green">6</span> <span className='yellow'>Trap Cards</span> regardless of color.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Death Trick (Passive)</span>
          <br />
          Trixie gains <span className='yellow'>Trap Cards</span> based on the level of the used energy card. If she has <span className="green">6</span> <span className='yellow'>Trap Cards</span> when she takes enough damage to die, she spends them all to <span className='orange'>resurrect</span> herself with <span className="green">20%</span> HP.
        </div>
      </div>
    ),
    stats: {
      sun: 'NORMAL',
      star: 'BAD',
      moon: 'VERY BAD',
      hp: 1525,
      atk: 387,
      def: 168,
      perception: 32,
      craft: 45,
      region: 'FRIDIENA',
    },
    image: trixie,
    rarity: 'epic',
  },


  // Jacob
  {
    name: 'Jacob - Union : Prosperity / Striker',
    id: 32,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">135%</span> of ATK to an enemy.
          <br /><br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increases</span> by <span className="green">175%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Unruly Execution (Active)</span>
          <br />
          Shoots <span className="green">10</span> <span className='yellow'>rounds</span> at random enemies, dealing damage equal to <span className="green">175%</span> of ATK. This attack is guaranteed to hit. To wanted enemies, put a <span className="brown">Time Bomb</span> on the target for <span className="green">2</span> turn(s).
          <br /><br />
          <span className="green">Card Match:</span> <span className='orange'>Restores</span> turn gauge by <span className="green">20%</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Summery Execution (Active)</span>
          <br />
          Deals damage equal to <span className="green">110%</span> of ATK to all enemies.
          <br /><br />
          <span className="green">Card Match:</span> Places a <span className="brown">Time Bomb</span> on targets for <span className="green">2</span> turn(s). Damage <span className='orange'>increases</span> by <span className="green">60%</span> against targets already with a <span className="brown">Time Bomb</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Batch Clearing (Passive)</span>
          <br />
          At the start of his turn, makes <span className="green">1</span> random enemy <span className='yellow'>Wanted</span> for <span className="green">1</span> turn(s). Attacking a <span className="yellow">Wanted</span> enemy places a <span className="brown">Time Bomb</span> on the target for <span className="green">2</span> turn(s).
        </div>
      </div>
    ),
    stats: {
      sun: 'BAD',
      star: 'NORMAL',
      moon: 'GOOD',
      hp: 1504,
      atk: 417,
      def: 156,
      perception: 30,
      craft: 48,
      region: 'FRIDIENA',
    },
    image: jacob,
    rarity: 'epic',
  },


  // Mirnoff
  {
    name: 'Mirnoff - Union : Prosperity / Striker',
    id: 33,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">135%</span> of ATK to an enemy and gains <span className="green">1</span> mana.
          <br /><br />
          <span className="green">Card Match:</span> Mana gain <span className='orange'>increases</span> by <span className="green">2</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Mighty Blow (Active)</span>
          <br />
          Deals damage equal to <span className="green">155%</span> of ATK to an enemy.
          <br /><br />
          <span className="green">Card Match:</span> Gains <span className="green">2</span> <span className='yellow'>coin(s)</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Money is Precious (Active)</span>
          <br />
          Deals damage equal to <span className="green">105%</span> of ATK to all enemies.
          <br /><br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increases</span> by <span className="green">10%</span> for each <span className='yellow'>coin</span> he has. If he has at least <span className='green'>5</span> <span className="yellow">coins</span>, he <span className="brown">Stuns</span> <span className="green">1 random enemy</span> for <span className="green">1</span> turn(s).
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Savings (Passive)</span>
          <br />
          Gains <span className='yellow'>coin(s)</span> based on the level of used energy card.
        </div>
      </div>
    ),
    stats: {
      sun: 'GOOD',
      star: 'NORMAL',
      moon: 'VERY BAD',
      hp: 1487,
      atk: 393,
      def: 169,
      perception: 28,
      craft: 45,
      region: 'FRIDIENA',
    },
    image: mirnoff,
    rarity: 'epic',
  },


  // Dante
  {
    name: (
      <>
        Dante - <span className='affiliation'>Union : Destruction</span> /{" "}
        <span className='class'>Striker</span>
      </>
    ),
    id: 34,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">120%</span> of ATK to an enemy and <span className='orange'>increases</span> turn gauge by <span className="green">5%</span>.
          <br /><br />
          <span className="green">Card Match:</span> <span className='orange'>increases</span> turn gauge by <span className="green">15%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Blade of Thirst (Active)</span>
          <br />
          Deals damage equal to <span className="green">150%</span> of ATK to an enemy.
          <br /><br />
          <span className="green">Card Match:</span> Gains <span className="green">1</span> stack(s) of <span className='yellow'>Madness</span>.
          <br />
          <span className="brown">Madness:</span> Enhances Dante's skills.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Mad Strike (Active)</span>
          <br />
          Deals damage equal to <span className="green">195%</span> of ATK to an enemy.
          <br /><br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increases</span> by <span className="green">15%</span> for every stack of <span className="yellow">Madness</span>. Gain <span className="green">2</span> stack(s) of <span className="yellow">Madness</span>.
          <br />
          <span className="brown">Madness:</span> Enhances Dante's skills.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Abyss Edge (Passive)</span>
          <br />
          Each attack <span className='orange'>reduces</span> Dante's HP by <span className="green">5%</span>. When <span className="yellow">Madness</span> stacks exceed <span className="green">4</span>, Dante is totally corrupted by the demon blade and turns into an <span className='yellow'>abyssal monster</span>.
        </div>
      </div>
    ),
    stats: {
      sun: 'GOOD',
      star: 'BAD',
      moon: 'VERY GOOD',
      hp: 1385,
      atk: 436,
      def: 150,
      perception: 40,
      craft: 37,
      region: 'KA-DRAX',
    },
    image: dante, // assuming 'dante' is a variable containing the image
    rarity: 'epic',
  },



  // Sakaris (id: 35)
  {
    name: (
      <>
        Sakaris - <span className='affiliation'>Union : Destruction</span> /{" "}
        <span className='class'>Supporter</span>
      </>
    ),
    id: 35,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of max HP to an enemy. Heals an ally with low HP for <span className="green">5%</span>.
          <br /><br />
          <span className="green">Card Match:</span> Gains <span className="green">2</span> mana.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Consume Shadow (Active)</span>
          <br />
          Spends <span className="green">10%</span> HP to <span className='orange'>heal</span> an ally with low HP other than self for <span className="green">15%</span> HP. If alone, Sakaris' HP is <span className='orange'>spent</span> with no healing.
          <br /><br />
          <span className="green">Card Match:</span> HP heal amount <span className='orange'>increases</span> to <span className="green">20%</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Void Fist (Active)</span>
          <br />
          Deals damage equal to <span className="green">200%</span> of max HP to an enemy.
          <br /><br />
          <span className="green">Card Match:</span> <span className='ornage'>Heals</span> self for <span className="green">40%</span> of damage dealt.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Void Body (Passive)</span>
          <br />
          When Sakaris dies, <span className='orange'>increases</span> the turn gauge of an ally other than self by <span className="green">100%</span> and grants <span className="brown">ATK Up</span> for <span className="green">2</span> turn(s).
        </div>
      </div>
    ),
    stats: {
      sun: 'VERY GOOD',
      star: 'NORMAL',
      moon: 'NORMAL',
      hp: 1691,
      atk: 345,
      def: 188,
      perception: 48,
      craft: 35,
      region: 'KA-DRAX',
    },
    image: sakaris, // assuming 'sakaris' is a variable containing the image
    rarity: 'epic',
  },


  // Demias
  {
    name: (
      <>
        Demias - <span className='affiliation'>Union : Destruction</span> /{" "}
        <span className='class'>Caster</span>
      </>
    ),
    id: 37,
    abilities: (
      <div className="abilitiesContainer">
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">135%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increases</span> by <span className="green">160%</span>.
        </div>
        <div className="secondaryAbility">
          <span className="attackName">Reaper's Scythe (Active)</span>
          <br />
          Deals damage equal to <span className="green">155%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Inflicts <span className="brown">SPD Down</span> on the target for <span className="green">2</span> turn(s). <span className='orange'>Decreases</span> the target's turn gauge by <span className="green">40%</span> if <span className='yellow'>Reaper's Presence</span> is active.
        </div>
        <div className="tertiaryAbility">
          <span className="attackName">Death's Grasp (Active)</span>
          <br />
          Inflicts <span className="yellow">Silence</span> on an enemy for <span className="green">1</span> turn(s).
          <br />
          <br />
          <span className="green">Card Match:</span> <span className='orange'>decreases</span> the target's Turn Gauge by <span className="green">40%</span>. If you have <span className='yellow'>Reaper's Presence</span>, <span className='orange'>decreases</span> the target's turn gauge to <span className="green">0</span>; if not, grants <span className='yellow'>Reaper's Presence</span> for <span className="green">2</span> turn(s).
        </div>
        <div className="passiveAbility">
          <span className="attackName">Soul Reaper (Passive)</span>
          <br />
          Demias gains <span className="yellow">Reaper's Presence</span> for <span className="green">2</span> turn(s) at the start of the battle.
        </div>
      </div>
    ),
    stats: {
      sun: 'GOOD',
      star: 'BAD',
      moon: 'VERY GOOD',
      hp: 1489,
      atk: 396,
      def: 170,
      perception: 47,
      craft: 37,
      region: 'KA-DRAX',
    },
    image: demias,
    rarity: 'epic',
  },

  // Kenneth
  {
    name: (
      <>
        Kenneth - <span className='affiliation'>Union : Prosperity</span> /{" "}
        <span className='class'>Supporter</span>
      </>
    ),
    id: 38,
    abilities: (
      <div className="abilitiesContainer">
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of ATK to an enemy and <span className='orange'>heals</span> an ally with low HP for <span className="green">5%</span> HP.
          <br />
          <br />
          <span className="green">Card Match:</span> Gains <span className="green">2</span> mana.
        </div>
        <div className="secondaryAbility">
          <span className="attackName">Present (Active)</span>
          <br />
          Deals damage equal to <span className="green">155%</span> of ATK to an enemy and gains <span className="green">1</span>. mana
          <br />
          <br />
          <span className="green">Card Match:</span> <span className="brown">Removes</span> <span className='green'>1</span> buff(s) from the target.
        </div>
        <div className="tertiaryAbility">
          <span className="attackName">Lucky Draw (Active)</span>
          <br />
          Grants the following buffs to allies for <span className="green">2</span> turn(s) based on the slot results:
          <br />
          <br />
          <span className="green">Heart:</span> <span className="brown">Crit Rate Up</span>
          <br />
          <br />
          <span className="green">Sword:</span> <span className="brown">Crit Power Up</span>
          <br />
          <br />
          <span className="green">777:</span> <span className="brown">Crit Rate Up & Crit Power Up</span>.
          <br />
          <br />
          <span className="green">Card Match:</span> <span className='orange'>Increases</span> the turn gauge of all allies by <span className="green">20%</span>.
        </div>
        <div className="passiveAbility">
          <span className="attackName">Gambler (Passive)</span>
          <br />
          Whenever an ally lands a Crit attack, that ally's turn gauge <span className='orange'>Increases</span> by <span className="green">10%</span>.
        </div>
      </div>
    ),
    stats: {
      sun: 'NORMAL',
      star: 'GOOD',
      moon: 'GOOD',
      hp: 1577,
      atk: 379,
      def: 188,
      perception: 34,
      craft: 43,
      region: 'NOVATRIUM',
    },
    image: kenneth,
    rarity: 'epic',
  },


  // Isabell
  {
    name: (
      <>
        Isabell - <span className='affiliation'>Union : Prosperity</span> /{" "}
        <span className='class'>Caster</span>
      </>
    ),
    id: 39,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">135%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Mana gain <span className='orange'>increases</span> by <span className="green">2</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Silent Monster (Active)</span>
          <br />
          Deals damage equal to <span className="green">155%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Inflicts <span className="brown">Buff Block</span> on the target for <span className="green">2</span> turn(s). If <span className='yellow'>Play Time</span> is active, ignores <span className="brown">50%</span> of the target's DEF.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">A Gentle Blow (Active)</span>
          <br />
          Deals damage equal to <span className="green">100%</span> of ATK to all enemies.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage increases to <span className="green">115%</span>. Decreases the turn gauge of the target by <span className="green">15%</span>. If <span className='yellow'>Play Time</span> is active, ignores <span className="brown">50%</span> of the target's DEF and further <span className='orange'>decreases</span> the target's turn gauge by <span className="green">15%</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Puppet Master</span>
          <br />
          Gains <span className="yellow">Play Time</span> if HP is at <span className="green">70%</span> or above and consumes it if HP is below.
        </div>
      </div>
    ),
    stats: {
      sun: "BAD",
      star: "GOOD",
      moon: "VERY BAD",
      hp: 1579,
      atk: 369,
      def: 180,
      perception: 29,
      craft: 41,
      region: "NOVATRIUM",
    },
    image: isabell,
    rarity: "epic",
  },

  // Samson
  {
    name: (
      <>
        Samson - <span className='affiliation'>Union : Prosperity</span> /{" "}
        <span className='class'>Tanker</span>
      </>
    ),
    id: 40,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">125%</span> of ATK to an enemy and <span className='orange'>decreases</span> their turn gauge by <span className="green">5%</span>.
          <br />
          <br />
          <span className="green">Card Match:</span> The turn gauge reduction <span className='orange'>increases</span> to <span className="green">15%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Double Lariat (Active)</span>
          <br />
          Deals damage equal to <span className="green">150%</span> of ATK to an enemy and inflicts <span className="brown">ATK Down</span> on them for <span className="green">1</span> turn(s).
          <br />
          <br />
          <span className="green">Card Match:</span> Inflicts <span className="brown">ATK Down</span> on the target for <span className="green">2</span> turn(s).
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Finale Punch (Active)</span>
          <br />
          Deals damage equal to <span className="green">195%</span> of ATK to an enemy and inflicts <span className="brown">DMG Reduction</span> on them for <span className="green">1</span> turn(s).
          <br />
          <br />
          <span className="green">Card Match:</span> Inflicts <span className="brown">DMG Reduction</span> on the target for <span className="green">2</span> turn(s).
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Physical Beauty</span>
          <br />
          Gains <span className="green">1</span> stack(s) of <span className="brown">Physical Beauty</span> whenever taking an action. Upon stacking <span className="green">4</span> <span className='yellow'>Physical Beauty</span>, spend them to gain <span className="green">2</span> stack(s) of <span className="brown">Attract</span>.
        </div>
      </div>
    ),
    stats: {
      sun: "BAD",
      star: "NORMAL",
      moon: "GOOD",
      hp: 1900,
      atk: 310,
      def: 205,
      perception: 40,
      craft: 44,
      region: "NOVATRIUM",
    },
    image: samson,
    rarity: "epic",
  },

  // Selena
  {
    name: (
      <>
        Selena - <span className='affiliation'>Union : Prosperity</span> /{" "}
        <span className='class'>Striker</span>
      </>
    ),
    id: 41,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">125%</span> of ATK to an enemy and <span className='orange'>increases</span> turn gauge by <span className="green">5%</span>.
          <br />
          <br />
          <span className="green">Card Match:</span> <span className='orange'>increases</span> turn gauge by <span className="green">15%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Precise Shot (Active)</span>
          <br />
          Deals damage equal to <span className="green">155%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Grants <span className="brown">Crit Rate Up</span> to self for <span className="green">2</span> turn(s).
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Dire Multi-Shot (Active)</span>
          <br />
          Deals damage equal to <span className="green">170%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage is <span className='orange'>increased</span> to <span className="green">190%</span>. Grants <span className="brown">Crit Power Up</span> to self for <span className="green">2</span> turn(s) before attack.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Mark of a Sniper</span>
          <br />
          The damage of the <span className='yellow'>Dire Multi-Shot</span> will be <span className='orange'>increased</span> by <span className="green">12%</span> of ATK in proportion to the number of applied buffs on Selena.
        </div>
      </div>
    ),
    stats: {
      sun: "VERY BAD",
      star: "GOOD",
      moon: "VERY BAD",
      hp: 1537,
      atk: 393,
      def: 171,
      perception: 28,
      craft: 44,
      region: "NOVATRIUM",
    },
    image: selena,
    rarity: "epic",
  },

  // Sana
  {
    name: (
      <>
        Sana - <span className='affiliation'>Union : Destruction</span> /{" "}
        <span className='class'>Supporter</span>
      </>
    ),
    id: 42,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">125%</span> of ATK to an enemy and <span className='orange'>increases</span> the turn gauge of an ally with high ATK by <span className="green">10%</span>.
          <br />
          <br />
          <span className="green">Card Match:</span> Mana gain <span className='orange'>increases</span> by <span className="green">2</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Foretold Blessing</span>
          <br />
          Grants <span className="brown">Crit Rate Up</span> to an ally for <span className="green">2</span> turn(s) and gains <span className="green">1</span> mana.
          <br />
          <br />
          <span className="green">Card Match:</span> Removes <span className="brown">2</span> debuff(s) from targets.
          <br />
          <br />
          <span className="brown">Crit Rate Up:</span> Adds <span className="green">30%</span> Crit Rate.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Star's Prophecy (Active)</span>
          <br />
          Grants <span className="brown">ATK Up</span> to all allies for <span className="green">2</span> turn(s).
          <br />
          <br />
          <span className="green">Card Match:</span> Grants <span className="brown">DMG Boost</span> to targets for <span className="green">2</span> turn(s).
          <br />
          <br />
          <span className="brown">ATK Up:</span> <span className='orange'>increases</span> ATK by <span className="green">20%</span>.
          <br />
          <br />
          <span className="brown">DMG Boost:</span> <span className='orange'>increases</span> damage done to enemies by <span className="green">30%</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Power of Divination</span>
          <br />
          <span className='orange'>Increases</span> SPD by <span className="green">3%</span> for every active buff on allies.
        </div>
      </div>
    ),
    stats: {
      sun: "BAD",
      star: "NORMAL",
      moon: "BAD",
      hp: 1710,
      atk: 370,
      def: 173,
      perception: 38,
      craft: 27,
      region: "VOLGNAAR",
    },
    image: sana,
    rarity: "epic",
  },

  // Durax
  {
    name: (
      <>
        Durax - <span className='affiliation'>Union : Destruction</span> /{" "}
        <span className='class'>Tanker</span>
      </>
    ),
    id: 43,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">120%</span> of max HP to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Has a <span className="green">60%</span> chance of <span className='orange'>Taunt</span> the target for <span className="green">1</span> turn(s).
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Grand Whirlwind</span>
          <br />
          Deals damage equal to <span className="green">135%</span> of max HP to an enemy and has a <span className="green">60%</span> chance to <span className='orange'>Stun</span> the target for <span className="green">1</span> turn(s).
          <br />
          <br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increases</span> to <span className="green">165%</span> and has a <span className="green">75%</span> chance to <span className='orange'>Stun</span> the target for <span className="green">1</span> turn(s).
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Death from Above</span>
          <br />
          Deals damage equal to <span className="green">110%</span> of max HP to all enemies.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increases</span> to <span className="green">130%</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Slaughterfest (Passive)</span>
          <br />
          When an ally dies in battle, Durax becomes so agitated he uses <span className='yellow'>Advanced Death from Above</span> and gains <span className="green">Extreme Fury</span> for <span className="green">2</span> turn(s).
          <br />
          <br />
          <span className="green">Extreme Fury:</span> ATK is <span className='orange'>increased</span> by <span className="green">20%</span>, and Crit Rate is <span className='orange'>increased</span> by <span className="green">20%</span>.
        </div>
      </div>
    ),
    stats: {
      sun: "NORMAL",
      star: "NORMAL",
      moon: "GOOD",
      hp: 1858,
      atk: 341,
      def: 186,
      perception: 48,
      craft: 30,
      region: "VOLGNAAR",
    },
    image: durax,
    rarity: "epic",
  },

  // Kazos
  {
    name: (
      <>
        Kazos - <span className='affiliation'>Union : Destruction</span> /{" "}
        <span className='class'>Tanker</span>
      </>
    ),
    id: 44,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">135%</span> of ATK to an enemy and gains <span className="green">1</span> mana.
          <br />
          <br />
          <span className="green">Card Match:</span> Mana gain <span className='orange'>increases</span> by <span className="green">2</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">The Path of Suffering</span>
          <br />
          Gains <span className="green">2</span> stacks of <span className='orange'>Attract</span>.
          <br />
          <br />
          <span className="green">Card Match:</span> <span className='orange'>Heals self</span> for <span className="green">10%</span> HP.
          <br />
          <br />
          <span className="brown">Attract:</span> Forces enemies to target this champion.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Bloody Needle (Active)</span>
          <br />
          Deals damage equal to <span className="green">105%</span> of ATK to all enemies and inflicts <span className='orange'>Hit Rate Down</span> on them for <span className="green">1</span> turn(s).
          <br />
          <br />
          <span className="green">Card Match:</span> Inflicts <span className='orange'>Hit Rate Down</span> for <span className="green">3</span> turn(s).
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Pain and Endurance</span>
          <br />
          At the end of his turn, Kazos sacrifices <span className="green">3%</span> of his max HP to <span className='orange'>heal</span> all allies for <span className="green">2%</span> HP.
        </div>
      </div>
    ),
    stats: {
      sun: "BAD",
      star: "GOOD",
      moon: "NORMAL",
      hp: 1816,
      atk: 306,
      def: 207,
      perception: 48,
      craft: 30,
      region: "VOLGNAAR",
    },
    image: kazos,
    rarity: "epic",
  },

  // Ifrit
  {
    name: (
      <>
        Ifrit - <span className='affiliation'>Union : Destruction</span> /{" "}
        <span className='class'>Caster</span>
      </>
    ),
    id: 45,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">135%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Has a <span className="green">75%</span> chance of <span className='orange'>removing</span> <span className="green">1</span> buff(s) from the target.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Flame Eruption (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of ATK to <span className="green">2</span> random enemies.
          <br />
          <br />
          <span className="green">Card Match:</span> Deals <span className="brown">DMG Over Time</span> to targets for <span className="green">2</span> turn(s).
          <br />
          <br />
          <span className="brown">DMG Over Time:</span> Takes true damage every turn.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Inferno (Active)</span>
          <br />
          Deals damage equal to <span className="green">110%</span> of ATK to all enemies.
          <br />
          <br />
          <span className="green">Card Match:</span> Deals <span className="green">45%</span> extra damage to targets with active <span className="brown">DMG Over Time</span>, removing all <span className="brown">DMG Over Times</span> and dealing the damage of all remaining ticks at once.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Blazing Flames (Passive)</span>
          <br />
          If Ifrit attacks a target with active <span className="brown">DMG Over Time</span>, she deals <span className="brown">DMG Over Time</span> to <span className="green">1</span> random enemy for <span className="green">2</span> turn(s).
          <br />
          <br />
          <span className='orange'>Increases</span> DEF by <span className="green">4%</span> for every active <span className="brown">DMG Over Time</span> on the enemies.
        </div>
      </div>
    ),
    stats: {
      sun: 'BAD',
      star: 'VERY GOOD',
      moon: 'BAD',
      hp: 1507,
      atk: 378,
      def: 168,
      perception: 44,
      craft: 35,
      region: 'VOLGNAAR',
    },
    image: ifrit,
    rarity: 'epic',
  },

  // Death Barrel
  {
    name: (
      <>
        Death Barrel - <span className='affiliation'>Union : Destruction</span> /{" "}
        <span className='class'>Striker</span>
      </>
    ),
    id: 46,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">135%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increases</span> to <span className="green">175%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Double Tap (Active)</span>
          <br />
          Deals damage equal to <span className="green">155%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increases</span> to <span className="green">185%</span>. Crit is guaranteed while <span className='orange'>Immortal</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Scream of Vengeance</span>
          <br />
          Deals damage equal to <span className="green">200%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increases</span> to <span className="green">240%</span>. Crit is guaranteed while <span className='orange'>Immortal</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Avenger (Passive)</span>
          <br />
          When Death Barrel kills an enemy, he gains <span className='orange'>Gleeful Revenge</span>. When Death Barrel takes damage that would kill him while he has an active buff, all his buffs are <span className='orange'>removed</span> and he recovers <span className="green">20%</span> HP while becoming <span className='orange'>Immortal</span> for <span className="green">1</span> turn. The duration of the <span className='orange'>Immortal</span> buff <span className='orange'>increases</span> by the same number of turns as the stacks of <span className='orange'>Gleeful Revenge</span> he has. Max duration: <span className="green">3</span> turn(s).
        </div>
      </div>
    ),
    stats: {
      sun: 'NORMAL',
      star: 'NORMAL',
      moon: 'NORMAL',
      hp: 1368,
      atk: 421,
      def: 165,
      perception: 40,
      craft: 37,
      region: 'VOLGNAAR',
    },
    image: deathbarrel,
    rarity: 'epic',
  },

  // Barbarossa
  {
    name: (
      <>
        Barbarossa - <span className='affiliation'>Union : Destruction</span> /{" "}
        <span className='class'>Caster</span>
      </>
    ),
    id: 47,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">135%</span> of ATK to an enemy and gains <span className='green'>1</span> mana.
          <br />
          <br />
          <span className="green">Card Match:</span> Mana gain <span className='orange'>increases</span> by <span className='green'>2</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Essence Steal (Active)</span>
          <br />
          Deals damage equal to <span className="green">140%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> <span className='orange'>Steals</span> <span className='green'>20%</span> of the target's turn gauge. <span className='orange'>Steals</span> <span className='green'>10%</span> more if the target's SPD is higher.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Fleet Call</span>
          <br />
          Deals damage equal to <span className="green">100%</span> of ATK to all enemies.
          <br />
          <br />
          <span className="green">Card Match:</span> <span className='orange'>Decreases</span> the target's turn gauge by <span className='green'>20%</span>. <span className='orange'>Steals</span> <span className='green'>10%</span> more if the target's SPD is higher.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Cursed Currents</span>
          <br />
          Inflicts <span className='orange'>Stun</span> to target whose turn gauge was turned into <span className='green'>0</span> with Barbarossa's attack for <span className='green'>1</span> turn(s).
        </div>
      </div>
    ),
    stats: {
      sun: 'NORMAL',
      star: 'NORMAL',
      moon: 'GOOD',
      hp: 1543,
      atk: 355,
      def: 176,
      perception: 49,
      craft: 39,
      region: 'VOLGNAAR',
    },
    image: barbarossa,
    rarity: 'epic',
  },


  // Wallaroo
  {
    name: (
      <>
        Wallaroo - <span className='affiliation'>Union : Harmony</span> /{" "}
        <span className='class'>Supporter</span>
      </>
    ),
    id: 48,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of ATK to an enemy and gains <span className="green">1</span> Mana.
          <br />
          <br />
          <span className="green">Card Match:</span> Gain <span className="green">2</span> Mana.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Treasure Found! (Active)</span>
          <br />
          Digs up a chest, which grants one of the following effects based on its type.
          <br />
          <span className='yellow'>Wooden Chest:</span> <span className='orange'>Heals</span> <span className="green">1</span> random ally's HP equal to <span className="green">80%</span> of ATK.
          <br />
          <span className='yellow'>Golden Chest:</span> <span className='orange'>Heals</span> the ally with the lowest HP equal to <span className="green">70%</span> of ATK.
          <br />
          <span className='yellow'>Platinum Chest:</span> <span className='orange'>Heals</span> all allies' HP equal to <span className="green">55%</span> of ATK.
          <br />
          <br />
          <span className="green">Card Match:</span> <span className="orange">Increases</span> the target's turn gauge by <span className="green">20%</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Boomerang Storm</span>
          <br />
          Strikes an enemy, then bounces to random enemies 5 times, dealing damage equal to <span className="green">180%</span> of ATK split across hit targets.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage <span className="orange">increases</span> to <span className="green">220%</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Exploration Expert</span>
          <br />
          If any ally's HP is at <span className="green">30%</span> or below, Treasure Found! skill's chance of finding a platinum chest <span className="orange">increases</span>.
        </div>
      </div>
    ),
    stats: {
      sun: 'NORMAL',
      star: 'NORMAL',
      moon: 'NORMAL',
      hp: 1100,
      atk: 260,
      def: 114,
      perception: 29,
      craft: 27,
      region: 'ERETRIA',
    },

    image: wallaroo,
    rarity: 'rare',
  },

  // Oak Acorn
  {
    name: (
      <>
        Oak Acorn - <span className='affiliation'>Union : Harmony</span> /{" "}
        <span className='class'>Tanker</span>
      </>
    ),
    id: 49,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of max HP to an enemy and gains <span className="green">1</span> mana.
          <br />
          <br />
          <span className="green">Card Match:</span> Mana gain <span className="orange">increases</span> by <span className="green">2</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName yellow">Luring Intruders (Active)</span>
          <br />
          Deals damage equal to <span className="green">145%</span> of max HP to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Has a <span className="green">65%</span> chance of <span className="orange">Taunting</span> the target for <span className="green">1</span> turn(s).
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName yellow">Nature's Friend (Active)</span>
          <br />
          Grants <span className="orange">Recovery</span> to all allies for <span className="green">2</span> turn(s).
          <br />
          <br />
          <span className="green">Card Match:</span> <span className="orange">Removes</span> <span className="green">1</span> debuff(s) from targets.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Forest Vitality (Passive)</span>
          <br />
          Turn gauge <span className='orange'>increases</span> by <span className="green">5%</span> when an ally with <span className='orange'>Recovery</span> is attacked.
        </div>
      </div>
    ),
    stats: {
      sun: 'BAD',
      star: 'GOOD',
      moon: 'GOOD',
      hp: 1268,
      atk: 204,
      def: 143,
      perception: 32,
      craft: 27,
      region: 'ERETRIA',
    },

    image: oakacorn,
    rarity: 'rare',
  },


  // Boo
  {
    name: (
      <>
        Boo - <span className='affiliation'>Union : Harmony</span> /{" "}
        <span className='class'>Striker</span>
      </>
    ),
    id: 50,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">135%</span> of ATK to an enemy and gains <span className="green">1</span> Mana.
          <br />
          <br />
          <span className="green">Card Match:</span> <span className="orange">Increases</span> the target's ATK by <span className="green">10%</span> for <span className="green">1</span> turn(s).
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName yellow">Scare Tactics (Active)</span>
          <br />
          Deals damage equal to <span className="green">100%</span> of ATK to all enemies.
          <br />
          <br />
          <span className="green">Card Match:</span> <span className="orange">Decreases</span> the targets' ATK by <span className="green">15%</span> for <span className="green">1</span> turn(s).
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName yellow">Disappearing Act (Active)</span>
          <br />
          <span className="orange">Disappears</span> for <span className="green">1</span> turn(s), becoming untargetable.
          <br />
          <br />
          <span className="green">Card Match:</span> <span className="orange">Reappears</span> with full HP.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName yellow">Mischievous</span>
          <br />
          If any enemy's HP is below <span className="green">50%</span>, the chance of using <span className='yellow'>Scare Tactics</span> <span className="orange">increases</span>.
        </div>
      </div>
    ),
    stats: {
      sun: 'BAD',
      star: 'NORMAL',
      moon: 'NORMAL',
      hp: <span className="green">1055</span>,
      atk: <span className="green">290</span>,
      def: <span className="green">100</span>,
      perception: <span className="green">25</span>,
      craft: <span className="green">24</span>,
      region: 'ERETRIA',
    },
    image: boo,
    rarity: 'rare',
  },


  // Garba
  {
    name: (
      <>
        Garba - <span className='affiliation'>Union : Harmony</span> /{" "}
        <span className='class'>Tanker</span>
      </>
    ),
    id: 51,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of ATK to an enemy and gains <span className="green">1</span> Mana.
          <br />
          <br />
          <span className="green">Card Match:</span> Mana gain <span className="orange">increases</span> by <span className="green">2</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName yellow">Hurl Rock (Active)</span>
          <br />
          Deals damage equal to <span className="green">145%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> <span className="orange">Removes</span> <span className="green">1</span> buff from the target.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName yellow">Dust Storm (Active)</span>
          <br />
          Inflicts <span className="orange">SPD Down</span> on all enemies for <span className="green">2</span> turn(s).
          <br />
          <br />
          <span className="green">Card Match:</span> Grants <span className="orange">Attract</span> to self for <span className="green">2</span> count(s).
          <br />
          <br />
          <span className="brown">SPD Down:</span> Decreases SPD by <span className="green">20%</span>.
          <br />
          <br />
          <span className="brown">Attract:</span> Forces enemies to target this champion.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName yellow">Solid Rock (Passive)</span>
          <br />
          Garba grants <span className="orange">Solid Rock</span> to himself for <span className="green">2</span> turn(s) when the battle begins.
          <br />
          <br />
          <span className="brown">Solid Rock:</span> With the sturdiness of the rock, incoming damage is <span className='orange'>reduced</span> by <span className="green">40%</span>.
        </div>
      </div>
    ),
    stats: {
      sun: 'GOOD',
      star: 'BAD',
      moon: 'BAD',
      hp: 1268,
      atk: 209,
      def: 145,
      perception: 33,
      craft: 28,
      region: 'ERETRIA',
    },

    image: garba,
    rarity: 'rare',
  },

  // Justina
  {
    name: (
      <>
        Justina - <span className='affiliation'>Union : Prosperity</span> /{" "}
        <span className='class'>Supporter</span>
      </>
    ),
    id: 52,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of ATK of an ally with high ATK to an enemy and gains <span className="green">1</span> Mana.
          <br />
          <br />
          <span className="green">Card Match:</span> Mana gain <span className="orange">increased</span> to <span className="green">2</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName yellow">Blessing of Holy Spirit</span>
          <br />
          Grant <span className="orange">Assist</span> to an ally. If the ally uses an active skill targeting an enemy, Justina will <span className="orange">assist</span> with a normal attack.
          <br />
          <br />
          <span className="green">Card Match:</span> Grants <span className="orange">ATK Up</span> to target for <span className="green">2</span> turn(s).
          <br />
          <br />
          <span className="brown">Assist:</span> Receives assist attack upon attacking.
          <br />
          <br />
          <span className="brown">ATK UP:</span> Increases ATK by <span className="green">20%</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName yellow">Holy Shard (Active)</span>
          <br />
          <span className="orange">Grants</span> Reflect DMG on an ally for <span className="green">2</span> turn(s).
          <br />
          <br />
          <span className="green">Card Match:</span> <span className="orange">Increases</span> the target's turn gauge by <span className="green">30%</span>.
          <br />
          <br />
          <span className="brown">Reflect DMG:</span> Reflects <span className="green">50%</span> of damage to the attacker upon taking a hit.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName yellow">Devoted Preist (Passive)</span>
          <br />
          <span className="orange">Remove</span> <span className="green">1</span> debuffs from the target <span className="orange">supported</span> by Justina with a <span className="green">50%</span> chance.
        </div>
      </div>
    ),
    stats: {
      sun: 'NORMAL',
      star: 'VERY BAD',
      moon: 'BAD',
      hp: 1127,
      atk: 250,
      def: 121,
      perception: 26,
      craft: 32,
      region: 'FRIDIENA',
    },

    image: justina,
    rarity: 'rare',
  },


  // Leopold
  {
    name: (
      <>
        Leopold - <span className='affiliation'>Union : Prosperity</span> /{" "}
        <span className='class'>Tanker</span>
      </>
    ),
    id: 53,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of ATK to an enemy and gains <span className="green">1</span> Mana.
          <br />
          <br />
          <span className="green">Card Match:</span> Mana gain <span className="orange">increases</span> by <span className="green">2</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName yellow">Leap Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">145%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Inflicts <span className="orange">ATK Down</span> on the target for <span className="green">2</span> turn(s).
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName yellow">Fierce Rush (Active)</span>
          <br />
          Deals damage equal to <span className="green">170%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Has an <span className="green">85%</span> chance to <span className="orange">Taunt</span> the target for <span className="green">1</span> turn(s).
          <br />
          <br />
          <span className="brown">Taunt:</span> Forces the attacker to attack the taunter.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName yellow">Guardman's Duty</span>
          <br />
          Has a <span className="green">35%</span> chance of taking the damage himself when an ally with high ATK takes damage. This damage is <span className="orange">reduced</span> by <span className="green">30%</span>.
        </div>
      </div>
    ),
    stats: {
      sun: 'VERY BAD',
      star: 'VERY BAD',
      moon: 'BAD',
      hp: 1268,
      atk: 212,
      def: 141,
      perception: 25,
      craft: 28,
      region: 'FRIDIENA',
    },

    image: leopold,
    rarity: 'rare',
  },


  // Gordon and Durden
  {
    name: (
      <>
        Gordon and Durden - <span className='affiliation'>Union : Prosperity</span> /{" "}
        <span className='class'>Striker</span>
      </>
    ),
    id: 54,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of ATK to an enemy and gains <span className="green">1</span> Mana.
          <br />
          <br />
          <span className="green">Card Match:</span> The damage inflicted on the target with <span className="orange">Mark</span> will be increased by <span className="green">40%</span>.
          <br />
          <br />
          <span className="brown">Mark:</span> Increases damage taken by <span className="green">30%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName yellow">Take Aim (Active)</span>
          <br />
          Deals damage equal to <span className="green">145%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> The damage inflicted on the target with <span className="orange">Mark</span> will be increased by <span className="green">50%</span>.
          <br />
          <br />
          <span className="brown">Mark:</span> Increases damage taken by <span className="green">30%</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName yellow">Brotherly Love (Active)</span>
          <br />
          Deals <span className="green">180%</span> damage on an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> The damage inflicted on the target with <span className="orange">Mark</span> will be increased by <span className="green">70%</span>.
          <br />
          <br />
          <span className="brown">Mark:</span> Increases damage taken by <span className="green">30%</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName yellow">Good Brother Gordon</span>
          <br />
          Gordon will shoot each turn to deal <span className="green">10%</span> of ATK to an enemy and leave <span className="orange">Mark</span> for <span className="green">2</span> turn(s).
          <br />
          <br />
          <span className="brown">Mark:</span> Increases damage taken by <span className="green">30%</span>.
        </div>
      </div>
    ),
    stats: {
      sun: 'BAD',
      star: 'VERY BAD',
      moon: 'VERY BAD',
      hp: 990,
      atk: 265,
      def: 113,
      perception: 21,
      craft: 33,
      region: 'FRIDIENA',
    },

    image: gordonanddurden,
    rarity: 'rare',
  },

  // Kimblee
  {
    name: (
      <>
        Kimblee - <span className='affiliation'>Union : Prosperity</span> /{" "}
        <span className='class'>Caster</span>
      </>
    ),
    id: 55,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of ATK to an enemy and gains <span className="green">1</span> Mana.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage is <span className="orange">increased</span> to <span className="green">150%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName yellow">Time Bomb (Active)</span>
          <br />
          Installs a <span className="orange">Time Bomb</span> that deals damage equal to <span className="green">160%</span> of ATK to an enemy after <span className="green">2</span> turn(s).
          <br />
          <br />
          <span className="green">Card Match:</span> Inflicts <span className="orange">DEF Down</span> to target for <span className="green">2</span> turn(s).
          <br />
          <br />
          <span className="brown">DEF Down:</span> Decreases DEF by <span className="green">35%</span>.
          <br />
          <br />
          <span className="brown">Time Bomb:</span> Deals damage equal to <span className="green">160%</span> of the caster's ATK upon expiry. This damage ignores the target's DEF.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName yellow">Mega Rocket (Active)</span>
          <br />
          Deals damage equal to <span className="green">120%</span> of ATK to all enemies. Kimblee has a <span className="green">50%</span> chance of escaping the rocket. If he fails to escape, he is <span className="orange">Stunned</span> for <span className="green">1</span> turn(s).
          <br />
          <br />
          <span className="green">Card Match:</span> Has a <span className="green">35%</span> chance of <span className="orange">Stunning</span> all enemies for <span className="green">1</span> turn(s). If he fails to escape, the chance changes to <span className="green">20%</span>.
          <br />
          <br />
          <span className="brown">Stun:</span> Becomes stunned, disabling all actions.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName yellow">Perfect Flight (Passive)</span>
          <br />
          If Kimblee successfully escapes using the <span className="orange">Mega Rocket</span>, he grants himself a <span className="orange">Crit Rate Up</span> and <span className="orange">Crit Power Up</span> for <span className="green">2</span> turn(s).
          <br />
          <br />
          <span className="brown">Crit Rate Up:</span> Adds <span className="green">30%</span> Crit Rate.
          <br />
          <br />
          <span className="brown">Crit Power Up:</span> Increases the amount of damage caused by critical strike by <span className="green">60%</span>.
        </div>
      </div>
    ),
    stats: {
      sun: 'BAD',
      star: 'NORMAL',
      moon: 'VERY BAD',
      hp: 1039,
      atk: 270,
      def: 110,
      perception: 26,
      craft: 36,
      region: 'NOVATRIUM',
    },

    image: kimblee,
    rarity: 'rare',
  },


  // Ged
  {
    name: (
      <>
        Ged - <span className='affiliation'>Union : Destruction</span> /{" "}
        <span className='class'>Striker</span>
      </>
    ),
    id: 56,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of ATK to an enemy and gains <span className='green'>1</span> mana.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage is <span className="orange">increased</span> to <span className="green">150%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName yellow">Sharpen Arrow (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Grants <span className="orange">Crit Rate Up</span> effect on self for <span className="green">2</span> turn(s).
          <br />
          <br />
          <span className="brown">Crit Rate Up:</span> Adds <span className="green">30%</span> Crit Rate.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName yellow">Rapid Fire (Active)</span>
          <br />
          Deals damage equal to <span className="green">180%</span> of ATK to <span className="green">4</span> random enemies each.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage is <span className="orange">increased</span> to <span className="green">220%</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName yellow">First Strike (Passive)</span>
          <br />
          Ged shoots arrows when the battle begins and deals damage equal to <span className="green">130%</span> of ATK to a random enemy.
        </div>
      </div>
    ),
    stats: {
      sun: 'NORMAL',
      star: 'VERY BAD',
      moon: 'GOOD',
      hp: 906,
      atk: 282,
      def: 108,
      perception: 31,
      craft: 27,
      region: 'VOLGNAAR',
    },

    image: ged,
    rarity: 'rare',
  },


  // Bulton
  {
    name: (
      <>
        Bulton - <span className='affiliation'>Union : Destruction</span> /{" "}
        <span className='class'>Tanker</span>
      </>
    ),
    id: 57,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Active (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of max HP to an enemy and gains <span className='green'>1</span> mana.
          <br />
          <br />
          <span className="green">Card Match:</span> Mana gain <span className="orange">increases</span> by <span className="green">2</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName yellow">Meat Chop (Active)</span>
          <br />
          Deals damage equal to <span className="green">145%</span> of max HP to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Inflicts <span className="orange">SPD Down</span> on target for <span className="green">2</span> turn(s).
          <br />
          <br />
          <span className="brown">SPD Down:</span> Decreases SPD by <span className="green">20%</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName yellow">Eat & Digest (Active)</span>
          <br />
          Deals damage equal to <span className="green">100%</span> of max HP to all enemies.
          <br />
          <br />
          <span className="green">Card Match:</span> <span className='orange'>Decreases</span> the turn gauge of the target with the highest ATK by <span className="green">30%</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName yellow">Fetid Smog (Passive)</span>
          <br />
          Gains <span className="green">1</span> stack(s) of <span className='yellow'>Stench</span> when an ally is hit and consumes <span className='yellow'>Stench</span> when he is hit (stacks up to <span className="green">5</span>).
          <br />
          <br />
          <span className="brown">Stench:</span> Bulton's ATK <span className="orange">increases</span> by <span className="green">3%</span> and SPD <span className="orange">increases</span> by <span className="green">3%</span>.
        </div>
      </div>
    ),
    stats: {
      sun: 'BAD',
      star: 'NORMAL',
      moon: 'VERY GOOD',
      hp: 1208,
      atk: 223,
      def: 136,
      perception: 36,
      craft: 22,
      region: 'VOLGNAAR',
    },
    image: bulton,
    rarity: 'rare',
  },


  // Fletcher
  {
    name: (
      <>
        Fletcher - <span className='affiliation'>Union : Destruction</span> /{" "}
        <span className='class'>Caster</span>
      </>
    ),
    id: 58,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">140%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage <span className="orange">increases</span> to <span className="green">160%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName yellow">Counterattack Posture</span>
          <br />
          Enters the <span className="orange">Counter</span> stance, dealing damage equal to <span className="green">90%</span> of ATK to the attacker upon being attacked for <span className="green">1</span> turn(s).
          <br />
          <br />
          <span className="green">Card Match:</span> Gains <span className="orange">DEF Up</span> for <span className="green">2</span> turn(s).
          <br />
          <br />
          <span className="brown">DEF Up:</span> Increases DEF.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName yellow">Living Blaze (Active)</span>
          <br />
          Strikes an enemy, then bounces to random enemies up to <span className="green">5</span> times, dealing damage equal to <span className="green">180%</span> of ATK split across hit targets.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage is increased by <span className="green">15%</span> of ATK for every count of <span className='yellow'>oil</span>. The stacked <span className='yellow'>oil</span> is depleted upon skill use.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName yellow">Lizard Oil (Passive)</span>
          <br />
          Fletcher generates <span className="yellow">Lizard Oil</span> based on the level of used energy card and generates more <span className='yellow'>oil</span> every time he counters an attack. Every <span className='yellow'>oil</span> stack <span className="orange">increases</span> Fletcher's SPD by <span className="green">3%</span>.
        </div>
      </div>
    ),
    stats: {
      sun: 'VERY BAD',
      star: 'NORMAL',
      moon: 'NORMAL',
      hp: 987,
      atk: 244,
      def: 118,
      perception: 34,
      craft: 27,
      region: 'VOLGNAAR',
    },
    image: fletcher,
    rarity: 'rare',
  }
  ,

  // Pindleroots
  {
    name: (
      <>
        Pindleroots - <span className='affiliation'>Union : Destruction</span> /{" "}
        <span className='class'>Striker</span>
      </>
    ),
    id: 59,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of ATK to an enemy and gains <span className='green'>1</span> mana.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage <span className="orange">increases</span> to <span className="green">150%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName yellow">Old Tree's Curse (Active)</span>
          <br />
          Deals damage equal to <span className="green">145%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Inflicts <span className="brown">DMG Over Time</span> on the target for <span className="green">2</span> turn(s).
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName yellow">Old Tree's Fury (Active)</span>
          <br />
          Deals damage equal to <span className="green">180%</span> of ATK to <span className="green">2</span> random enemies.
          <br />
          <br />
          <span className="green">Card Match:</span> Deals <span className="brown">DMG Over Time</span> to targets for <span className="green">2</span> turn(s).
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName yellow">Tree of Souls (Passive)</span>
          <br />
          <span className='orange'>Heals</span> self for <span className="green">2%</span> HP upon attacking a target with <span className="brown">DMG Over Time</span>.
        </div>
      </div>
    ),
    stats: {
      sun: 'NORMAL',
      star: 'NORMAL',
      moon: 'NORMAL',
      hp: 1038,
      atk: 258,
      def: 116,
      perception: 30,
      craft: 27,
      region: 'VOLGNAAR',
    },
    image: pindleroots,
    rarity: 'rare',
  }
  ,

  // Lucia
  {
    name: (
      <>
        Lucia - <span className='affiliation'>Union : Harmony</span> /{" "}
        <span className='class'>Caster</span>
      </>
    ),
    id: 60,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of ATK to an enemy and gains <span className='green'>1</span> mana.
          <br />
          <br />
          <span className="green">Card Match:</span> Mana <span className="orange">gain</span> increases by <span className="green">2</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName yellow">Grant Chill (Active)</span>
          <br />
          Deals damage equal to <span className="green">120%</span> of ATK to <span className="green">2</span> random enemies.
          <br />
          <br />
          <span className="green">Card Match:</span> Inflicts <span className="brown">DEF Down</span> on targets for <span className="green">2</span> turn(s).
          <br />
          <br />
          <span className="brown">DEF Down:</span> Decreases DEF by <span className="green">35%</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName yellow">Frigid Wedge (Active)</span>
          <br />
          Deals damage equal to <span className="green">170%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Inflicts <span className="brown">Freeze</span> to target for <span className="green">1</span> turn(s) with a <span className="green">70%</span> chance.
          <br />
          <br />
          <span className="brown">Freeze:</span> Becomes frozen, disabling all actions.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName yellow">Mana Cycle (Passive)</span>
          <br />
          Increases the ATK by <span className="green">20%</span> if Lucia possesses <span className='orange'>buffs</span> during battle.
        </div>
      </div>
    ),
    stats: {
      sun: 'BAD',
      star: 'NORMAL',
      moon: 'VERY BAD',
      hp: 616,
      atk: 164,
      def: 70,
      perception: 18,
      craft: 18,
      region: 'ERETRIA',
    },
    image: lucia,
    rarity: 'uncommon',
  }
  ,

  // Roots
  {
    name: (
      <>
        Roots - <span className='affiliation'>Union : Harmony</span> /{" "}
        <span className='class'>Supporter</span>
      </>
    ),
    id: 61,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of ATK to an enemy and gains <span className='green'>1</span> mana.
          <br />
          <br />
          <span className="green">Card Match:</span> Mana <span className="orange">gain</span> increases by <span className="green">2</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName yellow">Planting a Forest</span>
          <br />
          Grants <span className="brown">ATK Up</span> to an ally for <span className="green">2</span> turn(s).
          <br />
          <br />
          <span className="green">Card Match:</span> Grants <span className="brown">ATK Up</span> to all allies for <span className="green">2</span> turn(s).
          <br />
          <br />
          <span className="brown">ATK Up:</span> Increases ATK by <span className="green">20%</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName yellow">Nature's Grace (Active)</span>
          <br />
          Grants <span className="brown">Recovery</span> to an ally for <span className="green">2</span> turn(s).
          <br />
          <br />
          <span className="green">Card Match:</span> Grants <span className="brown">Recovery</span> to all allies for <span className="green">2</span> turn(s).
          <br />
          <br />
          <span className="brown">Recovery:</span> Heals HP every turn.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName yellow">Nature's Cycle</span>
          <br />
          <span className='orange'>Heals</span> the HP of all allies by <span className="green">30%</span> of their MAX HP when defeated.
        </div>
      </div>
    ),
    stats: {
      sun: 'NORMAL',
      star: 'NORMAL',
      moon: 'VERY BAD',
      hp: 697,
      atk: 141,
      def: 80,
      perception: 22,
      craft: 21,
      region: 'ERETRIA',
    },
    image: roots,
    rarity: 'uncommon',
  },


  // Zoe
  {
    name: (
      <>
        Zoe - <span className='affiliation'>Union : Prosperity</span> /{" "}
        <span className='class'>Supporter</span>
      </>
    ),
    id: 62,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of ATK to an enemy and gains <span className='green'>1</span> mana.
          <br />
          <br />
          <span className="green">Card Match:</span> Mana <span className="orange">gain</span> increases by <span className="green">2</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName yellow">Wipe and tighten!</span>
          <br />
          Grants <span className="brown">ATK Up</span> to an ally for <span className="green">2</span> turn(s).
          <br />
          <br />
          <span className="green">Card Match:</span> <span className='orange'>Increases</span> the target's turn gauge by <span className="green">30%</span>.
          <br />
          <br />
          <span className="brown">ATK Up:</span> Increases ATK by <span className="green">20%</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName yellow">Oil it! (Active)</span>
          <br />
          Grants <span className="brown">Recovery</span> to an ally for <span className="green">2</span> turn(s).
          <br />
          <br />
          <span className="green">Card Match:</span> Heals the target's HP equal to <span className="green">60%</span> of ATK.
          <br />
          <br />
          <span className="brown">Recovery:</span> Heals HP Every Turn.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName yellow">Welding and Tinkering</span>
          <br />
          Grants <span className="brown">DEF Up</span> to the ally with the highest ATK for <span className="green">2</span> turn(s) at the start of the battle.
          <br />
          <br />
          <span className="brown">DEF Up:</span> Increases DEF by <span className="green">70%</span>.
        </div>
      </div>
    ),
    stats: {
      sun: 'BAD',
      star: 'VERY BAD',
      moon: 'BAD',
      hp: 688,
      atk: 151,
      def: 73,
      perception: 16,
      craft: 21,
      region: 'NOVATRIUM',
    },
    image: zoe,
    rarity: 'uncommon',
  },


  // BB-0
  {
    name: (
      <>
        BB-0 - <span className='affiliation'>Union : Prosperity</span> /{" "}
        <span className='class'>Striker</span>
      </>
    ),
    id: 63,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of ATK to an enemy and gains <span className='green'>1</span> mana.
          <br />        <br />

          <span className="green">Card Match:</span> Damage is <span className='orange'>increased</span> to <span className="green">150%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName yellow">Border Shooting (Active)</span>
          <br />
          Deals damage equal to <span className="green">145%</span> of ATK to an enemy.
          <br />        <br />

          <span className="green">Card Match:</span> Grants <span className="brown">ATK Up</span> to self for <span className="green">2</span> turn(s).
          <br />        <br />

          <span className="brown">ATK Up:</span> Increases ATK by <span className="green">20%</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName yellow">Concentrated</span>
          <br />
          Deals damage equal to <span className="green">180%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage is <span className='orange'>increased</span> to <span className="green">220%</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName yellow">Obliteration Mode</span>
          <br />
          Guard Robot gains <span className="brown">SPD Up</span> for <span className="green">2</span> turn(s) when the battle begins.
          <br />
          <br />
          <span className="brown">SPD Up:</span> Increases SPD by <span className="green">20%</span>.
        </div>
      </div>
    ),
    stats: {
      sun: 'NORMAL',
      star: 'NORMAL',
      moon: 'BAD',
      hp: 564,
      atk: 180,
      def: 64,
      perception: 15,
      craft: 24,
      region: 'NOVATRIUM',
    },
    image: bb0,
    rarity: 'uncommon',
  },


  // Zaima
  {
    name: (
      <>
        Zaima - <span className='affiliation'>Union : Destruction</span> /{" "}
        <span className='class'>Supporter</span>
      </>
    ),
    id: 64,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of ATK to an enemy and gains <span className='green'>1</span> mana.
          <br />
          <br />
          <span className="green">Card Match:</span> Mana <span className='orange'>gain</span> increases by <span className="green">2</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName yellow">Reinforce (Active)</span>
          <br />
          Grants an ally <span className="brown">ATK Up</span> for <span className="green">2</span> turn(s).
          <br />
          <br />
          <span className="green">Card Match:</span> <span className='orange'>Increases</span> the target's turn gauge by <span className="green">20%</span>.
          <br />
          <br />
          <span className="brown">ATK Up:</span> Increases ATK by <span className="green">20%</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName yellow">Mana Shield (Active)</span>
          <br />
          Grants all allies a <span className='orange'>Barrier</span> equal to <span className="green">50%</span> of ATK.
          <br />
          <br />
          <span className="green">Card Match:</span> The HP of the <span className='orange'>Barrier increases</span> to <span className="green">75%</span> of ATK.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName yellow">Underhand Blow</span>
          <br />
          <span className='orange'>Gains</span> <span className='green'>1</span> Mana at the beginning of each turn.
        </div>
      </div>
    ),
    stats: {
      sun: 'BAD',
      star: 'VERY BAD',
      moon: 'GOOD',
      hp: 706,
      atk: 147,
      def: 79,
      perception: 21,
      craft: 15,
      region: 'VOLGNAAR',
    },
    image: zaima,
    rarity: 'uncommon',
  },


  // Umogin
  {
    name: (
      <>
        Umogin - <span className='affiliation'>Union : Destruction</span> /{" "}
        <span className='class'>Tanker</span>
      </>
    ),
    id: 65,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of ATK to an enemy and gains <span className='green'>1</span> mana.
          <br />        <br />

          <span className="green">Card Match:</span> Mana gain <span className='orange'>increases</span> by <span className="green">2</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName yellow">Haymaker (Active)</span>
          <br />
          Deals damage equal to <span className="green">145%</span> of ATK to an enemy.
          <br />        <br />
          <span className="green">Card Match:</span> <span className='orange'>Decreases</span> the target's turn gauge by <span className="green">20%</span> with a <span className="green">100%</span> chance.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName yellow">Huge Fang (Active)</span>
          <br />
          Deals damage equal to <span className="green">180%</span> of ATK to an enemy.
          <br />        <br />
          <span className="green">Card Match:</span> <span className='orange'>Heals</span> self for <span className="green">7%</span> of max HP for every stack of <span className='yellow'>Bloodlust</span> and removes all stacks of <span className='yellow'>Bloodlust</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName yellow">Bloodlust (Passive)</span>
          <br />
          Umogin will gain <span className='yellow'>Bloodlust</span> at the beginning of each turn. DEF will <span className='orange'>increase</span> by <span className="green">5%</span> for each <span className='yellow'>Bloodlust</span> effect. The effect can be stacked up to <span className="green">5</span> times.
        </div>
      </div>
    ),
    stats: {
      sun: 'GOOD',
      star: 'VERY BAD',
      moon: 'GOOD',
      hp: 794,
      atk: 133,
      def: 79,
      perception: 29,
      craft: 19,
      region: 'VOLGNAAR',
    },
    image: umogin,
    rarity: 'uncommon',
  },


  // Wizy
  {
    name: (
      <>
        Wizy - <span className='affiliation'>Union : Harmony</span> /{" "}
        <span className='class'>Striker</span>
      </>
    ),
    id: 66,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">140%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> <span className='orange'>Gains</span> <span className="green">1</span> Mana.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName yellow">Spirit Shot (Active)</span>
          <br />
          Deals damage equal to <span className="green">120%</span> of ATK to <span className='green'>2</span> random enemies.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage is <span className='orange'>increased</span> to <span className="green">135%</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName yellow">Spirit Explosion (Active)</span>
          <br />
          Deals damage equal to <span className="green">180%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> <span className='orange'>Increases</span> Ghost's turn gauge by <span className="green">30%</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName yellow">Ghost's Curse (Passive)</span>
          <br />
          Inflicts <span className='orange'>DMG Over Time</span> on the target for <span className='green'>2</span> turn(s) with a <span className="green">30%</span> chance.
        </div>
      </div>
    ),
    stats: {
      sun: 'VERY BAD',
      star: 'NORMAL',
      moon: 'VERY BAD',
      hp: 291,
      atk: 88,
      def: 32,
      perception: 12,
      craft: 13,
      region: 'ERETRIA',
    },
    image: wizy,
    rarity: 'common',
  },


  // Flabby
  {
    name: (
      <>
        Flabby - <span className='affiliation'>Union : Harmony</span> /{" "}
        <span className='class'>Tanker</span>
      </>
    ),
    id: 67,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Mana gain <span className='orange'>increases</span> by <span className="green">2</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName yellow">Rolling Slam! (Active)</span>
          <br />
          Deals damage equal to <span className="green">145%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Inflicts <span className='orange'>ATK Down</span> on the target for <span className="green">2</span> turn(s).
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName yellow">Vault Strike! (Active)</span>
          <br />
          Deals damage equal to <span className="green">170%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Has a <span className="green">70%</span> chance to <span className='orange'>Stun</span> the target for <span className="green">1</span> turn(s).
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName yellow">Tough Spirit (Passive)</span>
          <br />
          Gains <span className='orange'>DEF Up</span> for <span className="green">2</span> turn(s) at the start of the battle.
        </div>
      </div>
    ),
    stats: {
      sun: 'BAD',
      star: 'BAD',
      moon: 'BAD',
      hp: 390,
      atk: 64,
      def: 44,
      perception: 13,
      craft: 12,
      region: 'ERETRIA',
    },
    image: flabby,
    rarity: 'common',
  },


  // Jingo
  {
    name: (
      <>
        Jingo - <span className='affiliation'>Union : Prosperity</span> /{" "}
        <span className='class'>Striker</span>
      </>
    ),
    id: 68,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increased</span> to <span className="green">150%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName yellow">Fatal Shot (Active)</span>
          <br />
          Deals damage equal to <span className="green">145%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increased</span> to <span className="green">170%</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName yellow">Explosive Shot (Active)</span>
          <br />
          Deals damage equal to <span className="green">180%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increased</span> to <span className="green">220%</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName yellow">AP Ammo (Passive)</span>
          <br />
          Starts with <span className="green">2</span> stacks of <span className='yellow'>AP Ammo</span>. Using a LV2+ energy card consumes <span className="green">1</span> stack of <span className='yellow'>AP Ammo</span> at a time and <span className='orange'>increases</span> skill damage by <span className="green">50%</span>.
        </div>
      </div>
    ),
    stats: {
      sun: 'BAD',
      star: 'BAD',
      moon: 'NORMAL',
      hp: 291,
      atk: 88,
      def: 31,
      perception: 9,
      craft: 15,
      region: 'FRIDIENA',
    },
    image: jingo,
    rarity: 'common',
  },


  // EZ05
  {
    name: (
      <>
        EZ05 - <span className='affiliation'>Union : Prosperity</span> /{" "}
        <span className='class'>Caster</span>
      </>
    ),
    id: 69,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of ATK to an enemy and gains <span className='green'>1</span> mana.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage is <span className='orange'>increased</span> to <span className="green">150%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Overheat (Active)</span>
          <br />
          Magic Power is amplified to enter the overheat status and SPD will be <span className='orange'>increased</span> by <span className="green">20%</span> for <span className='green'>2</span> turn(s).
          <br />
          <br />
          <span className="green">Card Match:</span> Grants <span className='orange'>Crit Rate Up</span> and <span className='orange'>Crit DMG Up</span> on self for <span className='green'>2</span> turn(s). EZ05 will receive <span className='orange'>DMG Over Time</span> due to the overheat status.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Flame Thrower (Active)</span>
          <br />
          Deals damage equal to <span className="green">80%</span> of ATK on all enemies.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage is <span className='orange'>increased</span> to <span className="green">115%</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Heat Emission (Passive)</span>
          <br />
          The damage of the <span className='yellow'>Flame Thrower</span> will be <span className='orange'>increased</span> by <span className="green">12%</span> of ATK in proportion to the number of applied buffs on EZ05.
        </div>
      </div>
    ),
    stats: {
      sun: 'BAD',
      star: 'NORMAL',
      moon: 'VERY BAD',
      hp: 304,
      atk: 79,
      def: 36,
      perception: 9,
      craft: 14,
      region: 'NOVATRIUM',
    },
    image: ez05,
    rarity: 'common',
  },


  // Zeke
  {
    name: (
      <>
        Zeke - <span className='affiliation'>Union : Destruction</span> /{" "}
        <span className='class'>Striker</span>
      </>
    ),
    id: 70,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">130%</span> of ATK to an enemy and gains <span className='green'>1</span> mana.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage is <span className='orange'>increased</span> to <span className="green">150%</span>.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Shenanigans (Active)</span>
          <br />
          Grants <span className='green'>1</span> random ally other than self <span className='green'>1</span> stack of <span className='orange'>Attract</span>.
          <br />
          <br />
          <span className="green">Card Match:</span> Stack count of <span className='orange'>Attract</span> granted increases by <span className='green'>1</span>.
          <br />
          <br />
          <span className="brown">Attract:</span> Forces enemies to target this champion.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Cower (Active)</span>
          <br />
          Grants <span className='yellow'>Cower</span> to self for <span className='green'>1</span> turn(s). The received damage will be <span className='orange'>decreased</span> by <span className="green">20%</span>, while the <span className='yellow'>Cower</span> effect is granted, and deals damage equal to <span className="green">200%</span> of ATK to <span className='green'>1</span> random enemy on the next turn.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage is increased to <span className="green">250%</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Your Pain, My Pleasure</span>
          <br />
          If an ally excluding self receives damage while the <span className='yellow'>Cower</span> effect is granted, the turn gauge will be <span className='orange'>increased</span> by <span className="green">30%</span>.
        </div>
      </div>
    ),
    stats: {
      sun: 'VERY BAD',
      star: 'BAD',
      moon: 'BAD',
      hp: 282,
      atk: 86,
      def: 31,
      perception: 14,
      craft: 11,
      region: 'VOLGNAAR',
    },
    image: zeke,
    rarity: 'common',
  },


  // Bolkin
  {
    name: (
      <>
        Bolkin - <span className='affiliation'>Union : Destruction</span> /{" "}
        <span className='class'>Caster</span>
      </>
    ),
    id: 71,
    abilities: (
      <div className="abilitiesContainer">
        {/* Primary Ability */}
        <div className="primaryAbility">
          <span className="attackName">Normal Attack (Active)</span>
          <br />
          Deals damage equal to <span className="green">140%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> <span className='orange'>Gains</span> <span className='green'>1</span> mana.
        </div>

        {/* Secondary Ability */}
        <div className="secondaryAbility">
          <span className="attackName">Fireball Toss (Active)</span>
          <br />
          Deals damage equal to <span className="green">145%</span> of ATK to an enemy.
          <br />
          <br />
          <span className="green">Card Match:</span> Inflicts <span className='orange'>SPD Down</span> on the target for <span className='green'>2</span> turn(s).
          <br />
          <br />
          <span className="brown">SPD Down:</span> Decreases SPD by <span className='green'>20%</span>.
        </div>

        {/* Tertiary Ability */}
        <div className="tertiaryAbility">
          <span className="attackName">Fireball Spike (Active)</span>
          <br />
          Strikes an enemy, then bounces to random enemies up to <span className='green'>2</span> times, dealing damage equal to <span className="green">180%</span> of ATK split across hit targets.
          <br />
          <br />
          <span className="green">Card Match:</span> Damage <span className='orange'>increases</span> to <span className='green'>220%</span>.
        </div>

        {/* Passive Ability */}
        <div className="passiveAbility">
          <span className="attackName">Imp's Prank (Passive)</span>
          <br />
          Damage <span className='orange'>increases</span> by <span className='green'>30%</span> against targets with <span className='orange'>SPD down</span>.
        </div>
      </div>
    ),
    stats: {
      sun: 'BAD',
      star: 'VERY BAD',
      moon: 'GOOD',
      hp: 317,
      atk: 77,
      def: 34,
      perception: 14,
      craft: 10,
      region: 'VOLGNAAR',
    },
    image: bolkin,
    rarity: 'common',
  },
  

];


export const newHeroes = [


  // Aide (unreleased)
  {
    name: (
      <>
        Aide - <span className='affiliation'>Unknown</span> /{" "}
        <span className='class'>Unknown</span>
      </>
    ),
    id: 91, // You may assign a temporary unique ID or leave it as null
    abilities: (
      <div className="abilitiesContainer">
        {/* Placeholder Abilities */}
        <div className="ability">
          <span className="attackName">Abilities (Coming Soon)</span>
        </div>
      </div>
    ),
    stats: {
      sun: '???',
      star: '???',
      moon: '???',
      hp: '???',
      atk: '???',
      def: '???',
      perception: '???',
      craft: '???',
      region: '???',
    },
    image: aide, // Reference to Aide's image
    rarity: 'epic',
  },

  // Akhenaton (unreleased)
  {
    name: (
      <>
        Akhenaton - <span className='affiliation'>Unknown</span> /{" "}
        <span className='class'>Unknown</span>
      </>
    ),
    id: 92, // Assign a temporary unique ID or leave it as null
    abilities: (
      <div className="abilitiesContainer">
        {/* Placeholder Abilities */}
        <div className="ability">
          <span className="attackName">Abilities (Coming Soon)</span>
        </div>
      </div>
    ),
    stats: {
      sun: '???',
      star: '???',
      moon: '???',
      hp: '???',
      atk: '???',
      def: '???',
      perception: '???',
      craft: '???',
      region: '???',
    },
    image: akhenaton, // Reference to Akhenaton's image
    rarity: 'legendary',
  },

  // Akrak (unreleased)
  {
    name: (
      <>
        Akrak - <span className='affiliation'>Unknown</span> /{" "}
        <span className='class'>Unknown</span>
      </>
    ),
    id: 93, // Assign a temporary unique ID or leave it as null
    abilities: (
      <div className="abilitiesContainer">
        {/* Placeholder Abilities */}
        <div className="ability">
          <span className="attackName">Abilities (Coming Soon)</span>
        </div>
      </div>
    ),
    stats: {
      sun: '???',
      star: '???',
      moon: '???',
      hp: '???',
      atk: '???',
      def: '???',
      perception: '???',
      craft: '???',
      region: '???',
    },
    image: akrak, // Reference to Akrak's image
    rarity: 'epic',
  },

  // Barnard (unreleased)
  {
    name: (
      <>
        Barnard - <span className='affiliation'>Unknown</span> /{" "}
        <span className='class'>Unknown</span>
      </>
    ),
    id: 94,
    abilities: (
      <div className="abilitiesContainer">
        <div className="ability">
          <span className="attackName">Abilities (Coming Soon)</span>
        </div>
      </div>
    ),
    stats: {
      sun: '???',
      star: '???',
      moon: '???',
      hp: '???',
      atk: '???',
      def: '???',
      perception: '???',
      craft: '???',
      region: '???',
    },
    image: barnard,
    rarity: 'epic',
  },

  // Cleo (unreleased)
  {
    name: (
      <>
        Cleo - <span className='affiliation'>Unknown</span> /{" "}
        <span className='class'>Unknown</span>
      </>
    ),
    id: 95,
    abilities: (
      <div className="abilitiesContainer">
        <div className="ability">
          <span className="attackName">Abilities (Coming Soon)</span>
        </div>
      </div>
    ),
    stats: {
      sun: '???',
      star: '???',
      moon: '???',
      hp: '???',
      atk: '???',
      def: '???',
      perception: '???',
      craft: '???',
      region: '???',
    },
    image: cleo,
    rarity: 'epic',
  },

  // Diros (unreleased)
  {
    name: (
      <>
        Diros - <span className='affiliation'>Unknown</span> /{" "}
        <span className='class'>Unknown</span>
      </>
    ),
    id: 96,
    abilities: (
      <div className="abilitiesContainer">
        <div className="ability">
          <span className="attackName">Abilities (Coming Soon)</span>
        </div>
      </div>
    ),
    stats: {
      sun: '???',
      star: '???',
      moon: '???',
      hp: '???',
      atk: '???',
      def: '???',
      perception: '???',
      craft: '???',
      region: '???',
    },
    image: diros,
    rarity: 'legendary',
  },

  // Doumash (unreleased)
  {
    name: (
      <>
        Doumash - <span className='affiliation'>Unknown</span> /{" "}
        <span className='class'>Unknown</span>
      </>
    ),
    id: 97,
    abilities: (
      <div className="abilitiesContainer">
        <div className="ability">
          <span className="attackName">Abilities (Coming Soon)</span>
        </div>
      </div>
    ),
    stats: {
      sun: '???',
      star: '???',
      moon: '???',
      hp: '???',
      atk: '???',
      def: '???',
      perception: '???',
      craft: '???',
      region: '???',
    },
    image: doumash,
    rarity: 'legendary',
  },

  // Falk (unreleased)
  {
    name: (
      <>
        Falk - <span className='affiliation'>Unknown</span> /{" "}
        <span className='class'>Unknown</span>
      </>
    ),
    id: 98,
    abilities: (
      <div className="abilitiesContainer">
        <div className="ability">
          <span className="attackName">Abilities (Coming Soon)</span>
        </div>
      </div>
    ),
    stats: {
      sun: '???',
      star: '???',
      moon: '???',
      hp: '???',
      atk: '???',
      def: '???',
      perception: '???',
      craft: '???',
      region: '???',
    },
    image: falk,
    rarity: 'legendary',
  },

  // Frost (unreleased)
  {
    name: (
      <>
        Frost - <span className='affiliation'>Unknown</span> /{" "}
        <span className='class'>Unknown</span>
      </>
    ),
    id: 99,
    abilities: (
      <div className="abilitiesContainer">
        <div className="ability">
          <span className="attackName">Abilities (Coming Soon)</span>
        </div>
      </div>
    ),
    stats: {
      sun: '???',
      star: '???',
      moon: '???',
      hp: '???',
      atk: '???',
      def: '???',
      perception: '???',
      craft: '???',
      region: '???',
    },
    image: frost,
    rarity: 'epic',
  },

  // Jahanna (unreleased)
  {
    name: (
      <>
        Jahanna - <span className='affiliation'>Unknown</span> /{" "}
        <span className='class'>Unknown</span>
      </>
    ),
    id: 100,
    abilities: (
      <div className="abilitiesContainer">
        <div className="ability">
          <span className="attackName">Abilities (Coming Soon)</span>
        </div>
      </div>
    ),
    stats: {
      sun: '???',
      star: '???',
      moon: '???',
      hp: '???',
      atk: '???',
      def: '???',
      perception: '???',
      craft: '???',
      region: '???',
    },
    image: jahanna,
    rarity: 'legendary',
  },

  // Juriel (unreleased)
  {
    name: (
      <>
        Juriel - <span className='affiliation'>Unknown</span> /{" "}
        <span className='class'>Unknown</span>
      </>
    ),
    id: 101,
    abilities: (
      <div className="abilitiesContainer">
        <div className="ability">
          <span className="attackName">Abilities (Coming Soon)</span>
        </div>
      </div>
    ),
    stats: {
      sun: '???',
      star: '???',
      moon: '???',
      hp: '???',
      atk: '???',
      def: '???',
      perception: '???',
      craft: '???',
      region: '???',
    },
    image: juriel,
    rarity: 'legendary',
  },

  // Kate Nova (unreleased)
  {
    name: (
      <>
        Kate Nova - <span className='affiliation'>Unknown</span> /{" "}
        <span className='class'>Unknown</span>
      </>
    ),
    id: 102,
    abilities: (
      <div className="abilitiesContainer">
        <div className="ability">
          <span className="attackName">Abilities (Coming Soon)</span>
        </div>
      </div>
    ),
    stats: {
      sun: '???',
      star: '???',
      moon: '???',
      hp: '???',
      atk: '???',
      def: '???',
      perception: '???',
      craft: '???',
      region: '???',
    },
    image: kateNova,
    rarity: 'legendary',
  },

  // King Titan (unreleased)
  {
    name: (
      <>
        King Titan - <span className='affiliation'>Unknown</span> /{" "}
        <span className='class'>Unknown</span>
      </>
    ),
    id: 103,
    abilities: (
      <div className="abilitiesContainer">
        <div className="ability">
          <span className="attackName">Abilities (Coming Soon)</span>
        </div>
      </div>
    ),
    stats: {
      sun: '???',
      star: '???',
      moon: '???',
      hp: '???',
      atk: '???',
      def: '???',
      perception: '???',
      craft: '???',
      region: '???',
    },
    image: kingTitan,
    rarity: 'legendary',
  },

  // Kouga (unreleased)
  {
    name: (
      <>
        Kouga - <span className='affiliation'>Unknown</span> /{" "}
        <span className='class'>Unknown</span>
      </>
    ),
    id: 104,
    abilities: (
      <div className="abilitiesContainer">
        <div className="ability">
          <span className="attackName">Abilities (Coming Soon)</span>
        </div>
      </div>
    ),
    stats: {
      sun: '???',
      star: '???',
      moon: '???',
      hp: '???',
      atk: '???',
      def: '???',
      perception: '???',
      craft: '???',
      region: '???',
    },
    image: kouga,
    rarity: 'epic',
  },

  // Labagas (unreleased)
  {
    name: (
      <>
        Labagas - <span className='affiliation'>Unknown</span> /{" "}
        <span className='class'>Unknown</span>
      </>
    ),
    id: 105,
    abilities: (
      <div className="abilitiesContainer">
        <div className="ability">
          <span className="attackName">Abilities (Coming Soon)</span>
        </div>
      </div>
    ),
    stats: {
      sun: '???',
      star: '???',
      moon: '???',
      hp: '???',
      atk: '???',
      def: '???',
      perception: '???',
      craft: '???',
      region: '???',
    },
    image: labagas,
    rarity: 'legendary',
  },

  // Liu (unreleased)
  {
    name: (
      <>
        Liu - <span className='affiliation'>Unknown</span> /{" "}
        <span className='class'>Unknown</span>
      </>
    ),
    id: 106,
    abilities: (
      <div className="abilitiesContainer">
        <div className="ability">
          <span className="attackName">Abilities (Coming Soon)</span>
        </div>
      </div>
    ),
    stats: {
      sun: '???',
      star: '???',
      moon: '???',
      hp: '???',
      atk: '???',
      def: '???',
      perception: '???',
      craft: '???',
      region: '???',
    },
    image: liu,
    rarity: 'legendary',
  },

  // Raxos (unreleased)
  {
    name: (
      <>
        Raxos - <span className='affiliation'>Unknown</span> /{" "}
        <span className='class'>Unknown</span>
      </>
    ),
    id: 107,
    abilities: (
      <div className="abilitiesContainer">
        <div className="ability">
          <span className="attackName">Abilities (Coming Soon)</span>
        </div>
      </div>
    ),
    stats: {
      sun: '???',
      star: '???',
      moon: '???',
      hp: '???',
      atk: '???',
      def: '???',
      perception: '???',
      craft: '???',
      region: '???',
    },
    image: raxos,
    rarity: 'epic',
  },

  // Tasaria (unreleased)
  {
    name: (
      <>
        Tasaria - <span className='affiliation'>Unknown</span> /{" "}
        <span className='class'>Unknown</span>
      </>
    ),
    id: 108,
    abilities: (
      <div className="abilitiesContainer">
        <div className="ability">
          <span className="attackName">Abilities (Coming Soon)</span>
        </div>
      </div>
    ),
    stats: {
      sun: '???',
      star: '???',
      moon: '???',
      hp: '???',
      atk: '???',
      def: '???',
      perception: '???',
      craft: '???',
      region: '???',
    },
    image: tasaria,
    rarity: 'epic',
  },

];