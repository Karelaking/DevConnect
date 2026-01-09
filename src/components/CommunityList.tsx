import { useQuery } from '@tanstack/react-query'
import { supabase } from '../supabase-client';
import { Link } from 'react-router-dom';
import { ArrowRight, Users } from 'lucide-react';

export interface Community {
    id: number;
    name: string;
    description: string;
    created_at: string;
}

const fetchCommunities = async (): Promise<Community[]> => {
    const { data, error } = await supabase
        .from('Communities')
        .select('*')
        .order('created_at', { ascending: false });
    if (error) {
        throw new Error("Error fetching communities: " + error.message);
    }
    return data as Community[];
}

const CommunityList = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['communities'],
        queryFn: fetchCommunities
    });

    if (isLoading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="text-gray-400 font-mono">loading communities...</div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="text-red-400 font-mono">error loading communities</div>
            </div>
        );
    }

    if (!data || data.length === 0) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="text-gray-400 font-mono">no communities yet</div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {data.map((community) => (
                <Link 
                    key={community.id}
                    to={`/communities/${community.id}`}
                    className="group"
                >
                    <div className="bg-gradient-to-br from-slate-100/80 via-cyan-100/60 to-blue-100/60 dark:from-slate-900 dark:via-slate-800 dark:to-slate-800 border border-cyan-400/40 dark:border-cyan-900/30 rounded-lg p-6 hover:border-cyan-400/80 hover:shadow-lg hover:shadow-cyan-400/20 dark:hover:shadow-cyan-500/10 transition-all duration-300 h-full flex flex-col" style={{backdropFilter:'blur(2px)'}}>
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                                <h3 className="text-xl font-mono font-bold text-cyan-700 dark:text-cyan-300 group-hover:text-cyan-500 transition mb-2" style={{textShadow:'0 1px 0 #fff8'}}>
                                    {community.name}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                                    {new Date(community.created_at).toLocaleDateString('en-US', { 
                                        month: 'short', 
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </p>
                            </div>
                            <div className="shrink-0">
                                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500/20 transition">
                                    <Users className="w-5 h-5 text-cyan-400" />
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-800 dark:text-gray-300 text-sm mb-6 grow font-mono line-clamp-3" style={{textShadow:'0 1px 0 #fff4'}}>
                            {community.description}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-cyan-400/30 dark:border-cyan-900/20">
                            <span className="text-xs text-cyan-700 dark:text-gray-500 font-mono font-semibold">view community</span>
                            <ArrowRight className="w-4 h-4 text-cyan-700 dark:text-cyan-400 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default CommunityList;