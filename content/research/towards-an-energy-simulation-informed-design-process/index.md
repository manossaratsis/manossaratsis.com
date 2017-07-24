---
title: Towards an energy simulation-informed design process
---
* TOC
{:toc}
{:toc_levels 1..2}
{:.sidebar}

# Towards an energy simulation-informed design process: A 3-phase approach for a performative interdisciplinary laboratory building
---

[Full paper](http://www.ibpsa.org/proceedings/BS2015/p2265.pdf)

**Dogan, T., Saratsis, E., & Reinhart, C.F. (2015)**

*Building Simulation 2015: International Conference <br/>
of the Building Performance Simulation Association <br/>
Hyderabad, India, December 2015 <br/>
pp. 1419-1425*


## Abstract

This paper describes a case study on integrating environmental performance analysis workflows into design practice. Through the proliferation of visual geometric scripting environments such as Rhinoceros 3D’s Grasshopper, architects increasingly formulate design proposals parametrically. A recently developed multi-zone EnergyPlus plug-in for Grasshopper called Archsim enables users with limited building energy modeling (BEM) experience to run dynamic energy simulations. While previous limitations that were critical to enabling a fluid and interactive design process such as the effort and time required to set up simulation models have largely been overcome, the usefulness and applicability of energy simulations in such decision-making processes remains under-explored. In an effort to bridge this divide, the authors present an environmental performance-driven design approach for a 15,000m<span class="sup">2</span> laboratory building in Turkey. The study is unique in that the first author is the energy modeler and the architect in charge for the project. The design approach has been discretized into three main phases and questions raised throughout the process are translated into concrete, digestible precedents that may be useful for designers who want to implement energy modeling in their workflows.

> The usefulness and applicability of energy simulations in design decision-making processes remains under-explored.

## Introduction

For decades, modelers have implemented multi-zone thermal models to simulate the energy use of buildings in order to inform the design and construction process. Until recently, the most common framework of collaboration featured a clear division of labor where engineers were largely in charge of the energy consulting while the architect concentrated on design tasks. This divide of responsibilities has recently started to blur and even the American Institute of Architects (AIA) is actively promoting the use of energy simulations by architects [[AIA, 2012]](#references). This development is largely facilitated by a new generation of software. Visual geometric scripting environments such as Rhinoceros 3D’s Grasshopper have evolved to powerful generative tools and are widely used by architects to formulate design intentions parametrically. These environments have also attracted developers of environmental performance simulation tools [[Dogan et al., 2012]](#references) [[Roudsari et al., 2013]](#references) [[Jakubiec & Reinhart, 2011]](#references). A recently developed multi-zone EnergyPlus plug-in for Grasshopper called Archsim [[Dogan, 2013]](#references) enables users with limited energy modeling experience to run dynamic energy simulations for design feedback. Simultaneously, the implementation of automated thermal zoning algorithms [[Smith et al., 2011]](#references) [[Dogan et al., 2015]](#references) increase the effectiveness and speed of thermal model setup.


	* A: Atrium
	* B: Perimeter




The Erciyes University in Kayseri, Turkey is a fast growing academic institution in the process of building new research facilities within its existing campus. The project presented in this paper is a cross-disciplinary research laboratory focusing on chemistry, biology and physics with 15,000m<span class="sup">2</span> floor area. The brief required the building’s program that included three separate departments and one service unit, to be organized into four stories. Each department, consisting of 14 labs and their corresponding office spaces, had to be situated in close proximity to the service unit and around shared spaces such as the cafeteria, lecture hall and meeting rooms. A central space that would allow for casual meetings, lunch breaks or public events was also required. Parallel to the educational functions, a research center and business incubator had to be integrated to the building program. The research center would operate large and expensive equipment and would assist each department with their analytical and fabrication works. Hence, good spatial connectivity to these facilities from each department but also from the outside of the building was desirable. In addition to optimal research conditions in well daylit spaces, the building was required to have a near net-zero carbon footprint.


### Design Requirements

The project site provided by the client is located in a newly developed part of the university campus. The master plan follows a very sparse building distribution and hence no relevant contextual conditions had to be taken into account.



## Phase 1: Massing design

* Choosing the location and orientation of the building


In Phase 1, the authors began the form-finding process by aiming for a massing typology that had high intrinsic environmental performance, while accommodating the programmatic requirements in a space-efficient and well-interconnected way. The authors therefore established a set of massing typologies with diverse external morphology as well as schematic internal organization schemes. The set included bar, block, comb, cross, H, polygonal and atrium-focused typologies. Each variant was resolved up to the schematic floor plan level for all four floors, meaning that a basic understanding of internal organization and functional distribution was established. Then a series of metrics to evaluate these typologies were chosen:



### Results

![Figure 1](fig1.jpg){: .figure} *Figure 1: Typological matrix and the results of phase 1*

![Figure 2](fig2.jpg){: .figure} *Figure 2: Final massing design*

Figure 1 shows a matrix of the study’s results for each typology. Rather than looking for an optimal typology the authors sought to extract a series of design principles that could inform the later stages of the design decision-making process. The compactness ranged from 1.1 to 1.6. Typologies 1, 2, 8 score the highest rating. In the 3rd column of Figure 1, the efficiency of the circulation system is represented by a wire-frame drawing of corridors and vertical circulation points. Typology 2 with its closed-loop inner corridor seems to have a significant advantage over typologies with non-continuous circulation systems, such as 5 and 6: an equal-length corridor segment serves a higher portion of the typology’s area. In the 4th column, adjacency is plotted by color-coding each room from magenta to cyan, with magenta representing a high score. The typologies organized around a central shared space (1, 2) appear to perform better than the distributed shared space ones (5, 8). Up to this point, typologies 1 and 2 seem to strike the best balance of the aforementioned metrics. However, looking at the daylighting scores in the 5th column reveals that a typology with an appropriately proportioned atrium (1) has the potential to combine well-located shared spaces and higher daylight availability.


### Discussion


### Inputs

* Envelope shape, rotation and orientation
* Area requirements
* Internal organization scheme


### Goals

* Arranging the program of the building
* Designing the internal subdivision system
* Deciding on a material and construction standard


### Questions

* How do we negotiate the relationship between labs and offices?
* How do we reduce airflow rates in the labs?
* How do we minimie heating/cooling loads in labs and offices?
* What is the optimal U-value for the façade?


### Methodology

In Phase 2, the authors aimed to develop a functioning floor plan. They therefore filtered the principles derived from Phase 1 and designed a pentagon-based massing with fine-tuned proportions.


![Figure 3](fig3.jpg){: .figure} *Figure 3: Parametric model build-up*

A poly-line connecting the points, forms the main circulation corridor around the central atrium. Through offsetting this poly-line three perimeter bands were generated to accommodate functions and circulation. These bands were further subdivided into individual rooms [Fig. 3-2]. The outline of the floor plan was shattered into smaller segments that were scaled and extruded to generate the external window geometry. A similar geometric procedure was followed to generate the internal windows [Fig. 3-3]. All the geometries were then extruded and stacked four times to generate the whole-building model [Fig. 3-4 and 3-5]. The authors focused on two evaluation areas:



![Figure 5](fig5.jpg){: .figure} *Figure 5: Conceptual build-up of the typical floor-plan; circulation in gray and core locations in black*

The first layout variant included a traditional laboratory setup with laboratory spaces and writing desks [[Cordes and Holzkamm, 2007]](#references). According to the local building code, these desks don’t qualify as permanent office spaces. Hence, separate office spaces had to be provided. The second layout variant aimed to enhance the efficiency of the traditional setup by slightly increasing the writing desk area within the labs, and then separating them by a lightweight transparent interior partition. This way a twofold result was achieved: the writing desks counted towards workspace area leading to a more space-efficient scheme, while the actual volume of the lab was reduced. A reduction in lab volume was expected to yield significantly lower overall ventilation rates and energy demand. In the next step, the authors implemented high-efficiency conditioning systems with heat recovery and free cooling functionality. A photovoltaic system on the roof was also implemented to offset electrical equipment loads. 



![Figure 7](fig7.jpg){: .figure} *Figure 7: Atrium design iterations*

In Figure 7(right), a cumulative image of both heating and cooling loads for the atrium is presented. The implementation of natural ventilation leads to a 98% reduction on these loads. Figure 7(left) presents the atrium design iterations. The combined figure shows heating loads at the top graph and hours of overheating (T<span class="sub">op</span> > 28&deg;C) at the bottom graph. The three colored lines represent different atrium roof opening ratios (20%, 40%, 60%). With the reduction of overheating hours due to the implementation of fixed shading on the atrium roof, an increase in heating loads can be observed. This is mostly due to clipped-out direct solar radiation on the atrium roof glass that leads to a reduction of solar heat gains in the summer, but also in the winter. This increased heating demand is lowered with the implementation of double glazing with Low-E coating. Triple glazing with Low-E coating as well as an increasing in ventilation area have a smaller effect.

Phase 2 shows that both the atrium and the glass partitions are essential components in the environmental concept of the building. The clear separation of office and lab spaces helps to significantly reduce the required air-changes thus saving energy. Simultaneously, the atrium allows a double-sided daylight penetration into the space. 


### Inputs

* Perimeter shape and depth
* Schematic floor plan
* Atrium approximate roof opening ratio


### Goals

* Minimizing overheating hours and thermal loads in the atrium while maintaining an acceptable daylight contribution
* Minimizing daylight overexposure in the perimeter


### Questions

* What is an appropriate opening gradient for the atrium roof?
* How should the atrium roof shading system be designed?
* What is an appropriate spacing for the façade fins?


### Methodology

In phase 3 the authors focused on two main areas:



![Figure 9](fig9.jpg){: .figure} *Figure 9: Impact of fixed shading on the atriums daylight contribution on the floor plates*



### Discussion


This study showed that the use of design evaluation in terms of environmental simulations can help guide design decisions. It has been shown that simulations can be used in the earliest phases – even before a design exists. Hence, no specific inputs are required.





![Figure 13](fig13.jpg){: .figure} *Figure 13: Interior rendering*


## Conclusion

This case study illustrated the benefits of implementing performance-driven design approaches. The methods used informed the design process from the initial massing design phase to the detailed evaluation of focus areas such as the atrium roof and the perimeter facade. The implemented design measures had a significant impact on energy load reduction, daylight availability and visual comfort. This case study therefore showcased that environmental performance simulations can be useful and well-integrated to the design process.

The authors would like to thank Transsolar Energietechnik GmbH Munich and the Alexander S. Onassis Public Benefit Foundation for productive discussions and partial funding of this research project.


## References

* AIA. 2012. The AIA Energy Modeling Practice Guide. Retrieved March 2015. [https://www.aia.org/resources/8056-architects-guide-to-integrating-energy-modeli](https://www.aia.org/resources/8056-architects-guide-to-integrating-energy-modeli)


* de Wilde, P., Augenbroe, G., & van der Voorden, M. (2002). Design Analysis Integration: Supporting the Selection of Energy Saving Building Components. Building and environment 37 (8–9): 807–816.




* Dogan, T., Reinhart, C.F., & Michalatos, P. (2015). Autozoner: an algorithm for automatic thermal zoning of buildings with unknown interior space definitions. Journal of Building Performance Simulation, (ahead-of-print): 1-14.





* Nabil, A., & Mardaljevic, J. (2006). Useful daylight illuminances: A replacement for daylight factors. Energy and buildings, 38(7), 905-913.


* Reinhart, C.F., Mardaljevic, J., & Rogers, Z. (2006). Dynamic daylight performance metrics for sustainable building design. Leukos, 3(1), 7-31.


