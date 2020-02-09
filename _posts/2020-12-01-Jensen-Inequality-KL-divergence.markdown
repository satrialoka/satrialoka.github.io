---
layout: post
title:  "Jensen Inequality and Kullback-Leibler Divergence"
date:   2018-11-6 22:13:44 +0700
categories: notes
---
### Jensen Inequality
To be able to understand the properties of Kullback-Leibler divergence, we must understand the Jensen Inequality theorem first. The first part of this post will try to explain what Jensen Inequality is and in the second part we will explore the Kullback-Leibler divergence and how it relates to Jensen Inequality. 

Jensen Inequality is a inequality in mathematics which relates to concave/convex function. concave function is a function which line segment between any two points on the graph of the function lies below or on the graph. more formally we can write:}

function $$f(x)$$ is concave if, if any $$a,b,\alpha$$ satisfies:
\begin{equation}
   f(\alpha a+(1-\alpha)b) \geq \alpha f(a) + (1-\alpha) f(b)
\end{equation} 

and $$ 0 \leq \alpha \leq 1$$, also $$a,b \in X $$, $$X$$ is a concave set. 

In a convex function the line segment between any two points is lies above the function so we only need to change the $$\geq$$ sign above to $$\leq$$.

for example $$\log(x)$$ is a concave function, thus $$-\log(x)$$ is a convex function. The definition above can be visualized using $$\log(x)$$  and $$-\log(x)$$ function as follows:

<center>
<img src="\assets\2020-12-01-Jensen-Inequality-KL-divergence\log_funct.png" width="500" height="350" />
<img src="\assets\2020-12-01-Jensen-Inequality-KL-divergence\min_log_funct.png" width="500" height="350" />
</center>
That's the case for 2 points, consider we have 3 points. if $$\alpha_1+\alpha_2+\alpha_3 = 1$$ and $$\alpha_k \geq 0$$ and $$f(x)$$ is concave:

\begin{equation}
   f(\alpha_1 a_1+\alpha_2 a_2+\alpha_3 a_3) \geq \alpha_1 f(a_1)+\alpha_2 f(a_2)+\alpha_3 f(a_3)
\end{equation} 

thus using the definition of [expectation](https://en.wikipedia.org/wiki/Expected_value) we can generalize above equation to (concave and convex respectively): 
<center>
 $$ f(\mathbb{E}_{P(x)}x) \geq \mathbb{E}_{P(x)} f(x)$$ 
$$ f(\mathbb{E}_{P(x)}x) \leq \mathbb{E}_{P(x)} f(x)$$ 
</center>

Thats it, Jensen Inequality is the generalized form of the statement that the secant line of a convex function lies above the graph of the function 

### Kullback Leibler Divergence