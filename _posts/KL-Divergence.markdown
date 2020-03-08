---
layout: post
title:  "Kullback Leibler Divergence"
date:   2020-3-8 22:13:44 +0700
categories: unpublished
---
The first part of this post will try to explain what Jensen Inequality is and in the second part we will explore the Kullback-Leibler divergence and how it relates to Jensen Inequality. 

### Kullback Leibler Divergence

Kullback Leibler (KL) divergence is used for measure probability distribution difference by taking expected value of the log ratio between $$q(x)$$ and $$p(x)$$. the formula of KL divergence is given by: 
<div>
$$
\begin{aligned}
   KL(q||p) &= \mathbb{E}_{q(x)} \log \frac{q(x)}{p(x)} \\
   KL(q||p) &= \int q(x)\log \frac{q(x)}{p(x)}dx
\end{aligned}
$$
</div>

Properties :
<div>
$$
\begin{aligned}
\text{1. }KL(q(x)||p(x)) &\neq KL(p(x)||q(x))\text{(asymmetric)} \\
\text{2. }KL(q(x)||q(x)) &= 0 \\
\text{3. }KL(q(x)||p(x)) &\geq 0 \text {(non-negativity)}
\end{aligned}
$$
</div>

note that KL divergence is not simetrical because when we interchange $$q(x)$$ and $$p(x)$$ position it becomes different expression, thus it is called a divergence not a distance.


<center>
<img src="\assets\2020-12-01-Jensen-Inequality-KL-divergence\KL.png" width="900" height="300" />
</center>
