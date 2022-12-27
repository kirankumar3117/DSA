package dsaLearning.com;

public class HowManyTimesNumberPresent {
	public int find(int n,int gn) {
		int count=0;
		while(gn>0) {
			int temp=gn%10;
			if(n==temp) {
				count++;
			}
			gn=gn/10;
		}
		
		return count;
	}
}
