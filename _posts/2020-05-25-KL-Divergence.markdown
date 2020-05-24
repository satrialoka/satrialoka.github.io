---
layout: post
title:  "Kullback Leibler Divergence"
date:   2020-5-21 22:13:44 +0700
categories: notes
---
In this post we will explore the Kullback-Leibler divergence, its properties, and how it relates to [Jensen Inequality](https://satrialoka.github.io/notes/2020/03/07/Jensen-Inequality.html). 
Kullback Leibler (KL) divergence is used to measure the probability distribution difference by taking the expected value of the log-ratio between $$q(x)$$ and $$p(x)$$. the formula of KL divergence is given by: 
<div>
$$
\begin{aligned}
   KL(q||p) &= \mathbb{E}_{q(x)} \log \frac{q(x)}{p(x)} \\
   KL(q||p) &= \int q(x)\log \frac{q(x)}{p(x)}dx
\end{aligned}
$$
</div>
why we need KL divergence? why don't we just use distance to measure its difference? using KL divergence can capture the better difference between the distribution.
For example, look at this picture of distribution comparisons: 
<center>
<img src="\assets\2020-05-25-KL-Divergence\KL.png" width="900" height="300" />
</center>

both comparisons have the same parameter distance which is 1. But, graphically we can see that the second comparison is closer than the first one. Using KL divergence, it is shown above that the second comparison "closeness" value is lower than the first one. 

Properties :
<div>
$$
\begin{aligned}
\text{1. }KL(q(x)||p(x)) &\neq KL(p(x)||q(x)) &\text{(asymmetric)} \\
\text{2. }KL(q(x)||q(x)) &= 0 \\
\text{3. }KL(q(x)||p(x)) &\geq 0 &\text {(non-negativity)}
\end{aligned}
$$
</div>

The reason for the 1st property is that when we interchange $$q(x)$$ and $$p(x)$$ position (expected value change) it becomes different expression so that KL divergence is not symmetrical. that's also why KL divergence is not called a distance.

the proof for the 2nd property is as follows:
<div>
$$
\begin{aligned}
   KL(q||q) &= \int q(x)\log \frac{q(x)}{q(x)}dx\\
   KL(q||q) &= \int q(x)\log (1) dx\\
   KL(q||q) &= \int q(x)\cdot 0 dx\\
   KL(q||q) &= 0
\end{aligned}
$$
</div>

and lastly the proof of the third property is as follows :
<div>
$$
\begin{aligned}
   - KL(q||p) &= \mathbb{E}_{q(x)} -\log \frac{q(x)}{p(x)} = \mathbb{E}_{q(x)} \log \frac{p(x)}{q(x)}  

\end{aligned}
$$
</div>

Using [Jensen Inequality](https://satrialoka.github.io/notes/2020/03/07/Jensen-Inequality.html): 
<div>
$$
\begin{aligned}
   \mathbb{E}_{q(x)} \log \frac{p(x)}{q(x)} \leq \log\mathbb{E}_{q(x)} \frac{p(x)}{q(x)}

\end{aligned}
$$
</div>

in the right hand side we have:

<div>
$$
\begin{aligned}
   \log\mathbb{E}_{q(x)} \frac{p(x)}{q(x)}   &= \log \int q(x) \frac{p(x)}{q(x)}dx\\
                                             &= \log \int p(x)dx\\
                                             &= \log (1) \\
                                             &= 0
\end{aligned}
$$
</div>

back to our inequality we got:

<div>
$$
\begin{aligned}
   \mathbb{E}_{q(x)} \log \frac{p(x)}{q(x)} \leq 0

\end{aligned}
$$
</div>

Because -KL is always negative, thus KL is always positive!

reference and further readings:

[Coursera - HSE bayesian methods in ML](https://www.coursera.org/learn/bayesian-methods-in-machine-learning/home/welcome)
[Why KL divergence not a distance](https://www.johndcook.com/blog/2017/11/08/why-is-kullback-leibler-divergence-not-a-distance/)

